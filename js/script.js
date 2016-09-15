$(document).ready(function(){
	var x = "x";
	var o = "o";
	var turns = 0;
	var spot1 = $('#spot1');
	var spot2 = $('#spot2');
	var spot3 = $('#spot3');
	var spot4 = $('#spot4');
	var spot5 = $('#spot5');
	var spot6 = $('#spot6');
	var spot7 = $('#spot7');
	var spot8 = $('#spot8');
	var spot9 = $('#spot9');

	$('#board li').on('click', function(){
		if(oWon){
			alert("O is the winner! Let's start a new game.");
			clearBoard();
		} else if(xWon) {
			alert("X is the winner! Let's start a new game.");
			clearBoard();
		} else if(turns == 8){
			alert("Tie Game!");
			clearBoard();
		} else if($(this).hasClass('disable')){
			alert('Whoops! This spot is taken. Try again!');
		} else if(turns % 2 == 0){
			turns++;
			$(this).text(o);
			$(this).addClass('disable o');
			if(oWon()
		){
			alert("O is the winner!");
			turns = 0;
		}
		} else {
			turns++;
			$(this).text(x);
			$(this).addClass('disable x');
			if(xWon()) {
			alert("X is the winner!");
			turns = 0;
		}
		}
		});
		$('#reset').on('click', clearBoard);

		function xWon{
			spot1.hasClass('x') && spot2.hasClass('x') && spot3.hasClass('x') ||
			spot4.hasClass('x') && spot5.hasClass('x') && spot6.hasClass('x') ||
			spot7.hasClass('x') && spot8.hasClass('x') && spot9.hasClass('x') ||
			spot1.hasClass('x') && spot4.hasClass('x') && spot7.hasClass('x') ||
			spot2.hasClass('x') && spot5.hasClass('x') && spot8.hasClass('x') ||
			spot3.hasClass('x') && spot6.hasClass('x') && spot9.hasClass('x') ||
			spot1.hasClass('x') && spot5.hasClass('x') && spot9.hasClass('x') ||
			spot3.hasClass('x') && spot5.hasClass('x') && spot7.hasClass('x')
		}

		function oWon{
			spot1.hasClass('o') && spot2.hasClass('o') && spot3.hasClass('o') ||
			spot4.hasClass('o') && spot5.hasClass('o') && spot6.hasClass('o') ||
			spot7.hasClass('o') && spot8.hasClass('o') && spot9.hasClass('o') ||
			spot1.hasClass('o') && spot4.hasClass('o') && spot7.hasClass('o') ||
			spot2.hasClass('o') && spot5.hasClass('o') && spot8.hasClass('o') ||
			spot3.hasClass('o') && spot6.hasClass('o') && spot9.hasClass('o') ||
			spot1.hasClass('o') && spot5.hasClass('o') && spot9.hasClass('o') ||
			spot3.hasClass('o') && spot5.hasClass('o') && spot7.hasClass('o')
		}

		function clearBoard(){
			$('#board li').text(' ');
			$('#board li').removeClass('disable');
			$('#board li').removeClass('o');
			$('#board li').removeClass('x');
			turns = 0;
		}
});