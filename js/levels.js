var maxLevel = 3;
function initLevel(){
setProgressLevel(getMyLevel());
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
		alert('您还没到过第 '+level_+' 关呢，这样是不可以哒~');
	else
		alert('输入不合法哦=.=');
}
function gotoNextLevel(){
	if(confirm('过关啦！')){
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
