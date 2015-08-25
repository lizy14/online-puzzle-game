function checkAnswer(){
	if($('#option-1')[0].checked)
		gotoNextLevel();
	else
		wrongAnswer();
}