var level;
function loadGame(){
	level = (localStorage.getItem('onlinePuzzleGame-level') || '0');
	if(level != '0'){
		$('#lastLevel').html('您上次玩到第 ' + level + ' 关。');
		$('#btnContinue').attr('onclick','loadLevel('+level+');')
		
	}else{
		$('#lastLevel').html('请开始新游戏~ 每当您进入新一关，游戏会自动存档。');
		$('#btnContinue').hide();
	}
}