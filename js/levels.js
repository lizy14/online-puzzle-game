var maxLevel = 5;
var currentLevel = 0;
var now=new Date();
function initLevel(){	

	if(getMyLevel()>=getProgressLevel())
		$('.btnNext').hide();
	else if(getMyLevel()=='F')
		$('.btnNext').hide();
	else
		$('.btnNext').show();
	if(getMyLevel()<=0)
		$('.btnPrev').hide();
	else
		$('.btnPrev').show();
		
	window.scrollTo(0,0);
	
	if(getMyLevel()!='0' && (getMyLevel()>=getProgressLevel()))
		setProgressLevel(getMyLevel());
}
function loadLevel(level){
	if(currentLevel==2)
		cleanUp();
	console.log('loading level '+level);
	if(level < 0)level = 0;
	currentLevel = level;
	
	
	$.get('level'+level+'.html', function( data ) {
	  $( "#levelHTML" ).html( data );
	  componentHandler.upgradeAllRegistered();
	  initLevel();
	  $.get('js\\level'+level+'.js', function( data ) {
		  eval(data);
		});
	});

}
function navPrev(){
	loadLevel(getMyLevel()=='F'?maxLevel:parseInt(getMyLevel())-1);
}
function navNext(){
	loadLevel(getMyLevel()==maxLevel?'F':parseInt(getMyLevel())+1);
}
function getMyLevel(){
	return currentLevel;
}
function setProgressLevel(level){
	localStorage.setItem('onlinePuzzleGame-level', level);
}
function getProgressLevel(){
	return (localStorage.getItem('onlinePuzzleGame-level') || '0');
}
function alreadyFinishedAll(){
	return (getProgressLevel()=='F');
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
