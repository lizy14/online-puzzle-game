var level;
function loadGame(){
	level = (localStorage.getItem('onlinePuzzleGame-level') || '0');
	if(level != '0'){
		$('#lastLevel').html('您上次玩到第 ' + level + ' 关。');
		$('#btnContinue').attr('onclick','loadLevel('+level+');')
		
	}else{
		$('#lastLevel').html('您没有存档。请开始新游戏~');
		$('#btnContinue').hide();
	}
}