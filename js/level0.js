function loadGame(){
	var level = getProgressLevel();
	if(alreadyFinishedAll()){
		$('#lastLevel').html('您已经通关过了。');
		$('#btnContinue').attr('disabled','true');
	}else if(level != '0'){
		$('#lastLevel').html('您上次玩到第 ' + level + ' 关。');
		$('#btnContinue').attr('onclick','loadLevel('+level+');')
		
	}else{
		$('#lastLevel').html('请开始新游戏~ 每当您进入新一关，游戏会自动存档。');
		$('#btnContinue').attr('disabled','true');
		$('#divJump').hide();
	}
	
}
