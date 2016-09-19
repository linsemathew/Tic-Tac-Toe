$(document).ready(function(){
	var playerOName = prompt("Who is player O?")
	var playerXName = prompt("Who is player X?")
	var playerOScore = 0
	var playerXScore = 0
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

	if (playerOName) {
		$('#player-o-name').text(playerOName);
	}
	if (playerXName) {
		$('#player-x-name').text(playerXName);
	}

	$('#board li').on('click', function(){
		if(checkWinner(o)){
			alert("O was the winner! Let's start a new game.");
			clearBoard();
		} else if(checkWinner(x)){
			alert("X was the winner! Let's start a new game.");
			clearBoard();
		} else if($(this).hasClass('disable')){
			alert('Whoops! This spot is taken. Try again!');
		} else if(turns % 2 == 0){
			$(this).text(o);
			$(this).addClass('disable o');
			turns++;
			if(checkWinner(o)){
				alert("O is the winner!");
				turns = 0;
				playerOScore++;
				$('#player-o-score').text(playerOScore);
			}
		} else {
			$(this).text(x);
			$(this).addClass('disable x');
			turns++;
			if(checkWinner(x)){
				alert("X is the winner!");
				turns = 0;
				playerXScore++;
				$('#player-x-score').text(playerXScore);
			}
		} 
		
		if(turns == 9){
			alert("It's a tie! Let's start a new game.")
			clearBoard()
		}
	});

	$('#reset').on('click', clearBoard);

	function checkWinner(symbol){
		if(spot1.hasClass(symbol) && spot2.hasClass(symbol) && spot3.hasClass(symbol) ||
			spot4.hasClass(symbol) && spot5.hasClass(symbol) && spot6.hasClass(symbol) ||
			spot7.hasClass(symbol) && spot8.hasClass(symbol) && spot9.hasClass(symbol) ||
			spot1.hasClass(symbol) && spot4.hasClass(symbol) && spot7.hasClass(symbol) ||
			spot2.hasClass(symbol) && spot5.hasClass(symbol) && spot8.hasClass(symbol) ||
			spot3.hasClass(symbol) && spot6.hasClass(symbol) && spot9.hasClass(symbol) ||
			spot1.hasClass(symbol) && spot5.hasClass(symbol) && spot9.hasClass(symbol) ||
			spot3.hasClass(symbol) && spot5.hasClass(symbol) && spot7.hasClass(symbol)
		){
			return true;
		}
	};

	function clearBoard(){
		$('#board li').text(' ');
		$('#board li').removeClass('disable');
		$('#board li').removeClass('o');
		$('#board li').removeClass('x');
		turns = 0;
	};
});