

function loadLevel(level){
	document.location.href='level'+level+'.html';
}

function getMyLevel(){
	return (document.location.href.match(/level(\d).html/)[1]);
}
function setProgressLevel(level){
	localStorage.setItem('onlinePuzzleGame-level', level);
}

function gotoNextLevel(){
	if(confirm('过关啦！')){
		loadLevel(parseInt(getMyLevel())+1);
	}
		
}

function wrongAnswer(){
	alert('失败，请再次尝试~');
}