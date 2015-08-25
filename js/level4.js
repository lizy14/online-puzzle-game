now=new Date();
$('#date_').html(now.toDateString());
function checkAnswer(){
	var password_ = $('#password')[0].value;
	if(password_=="136")
		gotoNextLevel();
	else
		wrongAnswer();
}