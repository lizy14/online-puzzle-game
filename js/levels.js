var maxLevel = 4;
function initLevel(){
	
	window.onload=function(){
		$('h5').html(
			'<a onclick="loadLevel(0)"><img src="img/home.png" /></a>'+
			'<a onclick="loadLevel(parseInt(getMyLevel())-1)"><img src="img/previous.png" /></a>'
			+((getMyLevel()<getProgressLevel())?'<a onclick="loadLevel(parseInt(getMyLevel())+1)"><img src="img/next.png" /></a>':"")
			+$('h5').html());
		window.scrollTo(0,0);
	}
	if(getMyLevel()!='0' && (getMyLevel()>=getProgressLevel()))
		setProgressLevel(getMyLevel());
}
function loadLevel(level){
	if(level < 0)level = 0;
	document.location.href='level'+level+'.html';
}
function getMyLevel(){
	return (document.location.href.match(/level(\d|F).html/)[1]);
}
function setProgressLevel(level){
	localStorage.setItem('onlinePuzzleGame-level', level);
}
function getProgressLevel(){
	return (localStorage.getItem('onlinePuzzleGame-level') || '0');
}
function alreadyFinishedAll(){
	return (localStorage.getItem('onlinePuzzleGame-finishedAll') || false);
}
function finishingAll(){
	localStorage.setItem('onlinePuzzleGame-finishedAll','true');
}
function jumpToLevel(level_){
	var level_ = parseInt(level_);
	var level__ = parseInt(alreadyFinishedAll()?maxLevel:getProgressLevel());
	if(level_ >= 0 && level_ <= level__)
		loadLevel(level_);
	else if(level_ > level__)
		if(alreadyFinishedAll())
			alert('你通关过，应该知道总共只有 '+level__+' 关吧=.=');
		else
			alert('您还从没到过这第 '+level_+' 关呢，这样是不可以哒~');
	else
		alert('输入不合法哦=.=');
}
function gotoNextLevel(){
	if(confirm('过关啦！')){}{
		var level_ = parseInt(getMyLevel())+1;
		if(level_ <= maxLevel)
			loadLevel(level_);
		else
			loadLevel('F');
	}
		
}
function wrongAnswer(){
	alert('失败，请再次尝试~');
}
