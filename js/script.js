$(document).ready(function(){
	var x = "X";
	var o = "O";
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
		if(spot1.hasclass('O') && spot2.hasclass('O') && spot3.hasclass('O') ||
			spot4.hasclass('O') && spot5.hasclass('O') && spot6.hasclass('O') ||
			spot7.hasclass('O') && spot8.hasclass('O') && spot9.hasclass('O') ||
			spot1.hasclass('O') && spot4.hasclass('O') && spot7.hasclass('O') ||
			spot2.hasclass('O') && spot5.hasclass('O') && spot8.hasclass('O') ||
			spot3.hasclass('O') && spot6.hasclass('O') && spot9.hasclass('O') ||
			spot1.hasclass('O') && spot5.hasclass('O') && spot9.hasclass('O') ||
			spot3.hasclass('O') && spot5.hasclass('O') && spot7.hasclass('O')
		){
			alert("X is the winner!");
			$('#board li').text(' ');
			$('#board li').removeClass('disable');
			$('#board li').removeClass('O');
			$('#board li').removeClass('X');
		} else if(spot1.hasclass('X') && spot2.hasclass('X') && spot3.hasclass('X') ||
			spot4.hasclass('X') && spot5.hasclass('X') && spot6.hasclass('X') ||
			spot7.hasclass('X') && spot8.hasclass('X') && spot9.hasclass('X') ||
			spot1.hasclass('X') && spot4.hasclass('X') && spot7.hasclass('X') ||
			spot2.hasclass('X') && spot5.hasclass('X') && spot8.hasclass('X') ||
			spot3.hasclass('X') && spot6.hasclass('X') && spot9.hasclass('X') ||
			spot1.hasclass('X') && spot5.hasclass('X') && spot9.hasclass('X') ||
			spot3.hasclass('X') && spot5.hasclass('X') && spot7.hasclass('X') 
		){
			alert("X is the winner!");
			$('#board li').text();
			$('#board li').removeClass('disable');
			$('#board li').removeClass('O');
			$('#board li').removeClass('X');
		} else if(turns == 9){
			alert("Tie Game!");
			$('#board li').text();
			$('#board li').removeClass('disable');
			$('#board li').removeClass('O');
			$('#board li').removeClass('X');
			turns = 0;
		}
	});
});