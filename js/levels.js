var maxLevel = 3;
function initLevel(){
	setProgressLevel(getMyLevel());
	window.onload=function(){
		if(getMyLevel()!='0')
			$('h5').html('<a onclick="loadLevel(0)"><img src="img/back.png" /></a>'+$('h5').html());
		window.scrollTo(0,0);
	}
}
function loadLevel(level){
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
