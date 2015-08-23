setProgressLevel(2);
var gameOnGoing = false;
var nTimes = 0;
var timeStart = 0;
var timeEnd = 0;
var fullTime = 9*1000;
var fullTimes = 26;
var gameStarting = true;

function getNow(){
	var now=new Date();
	return now.getTime();
}

function checkAnswer(){
	if($('#option-1')[0].checked)
		gotoNextLevel();
	else
		wrongAnswer();
}

function render(){
	$('#lblClickCount').html(nTimes);
	var delta = timeEnd-getNow();
	if(gameStarting)
		delta = fullTime;
	$('#lblTimeLeft').html((delta>=0?(delta/1000):0).toFixed(2));
}

function check(){
	var delta = timeEnd-getNow();
	if(delta<0){
		gameOnGoing = false;
		render();
		if(nTimes>=fullTimes){
			gotoNextLevel();
		}else{
			wrongAnswer();
		}
	}
	if(gameOnGoing)
		setTimeout("check()",1);	
}
function buttonClicked(){
	gameStarting = false;
	if(gameOnGoing){
		nTimes++;
	}else{
		gameOnGoing = true;
		nTimes = 1;
		timeStart = getNow();
		timeEnd = timeStart + fullTime;	
		check();
	}
}