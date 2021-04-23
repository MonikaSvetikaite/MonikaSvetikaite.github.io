var timer;
var timeLeft = 2; //seconds


//what happens when timer runs out
function gameOver(){
	
	//cancels setInterval to stop updateTimer being called
	cancelInterval(timer);
	
	//shows button to play agian
	$('playAgainButton').show();
}

function updateTimer() {
	timeLeft = time - 1;
	if(timeLeft >= 0)
		$('#timer').html(timeLeft);
	else{
		gameOver();	
	}
}

function start(){
	timer = SetInterval(updateTimer , 1000);
	
	updatTimer();
	
	//button is hidden to not allow restarting
	$('#playAgainButton').hide();
}