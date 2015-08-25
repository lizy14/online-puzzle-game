function checkAnswer(){
	if($('#password')[0].value=="404")
		gotoNextLevel();
	else
		wrongAnswer();
}