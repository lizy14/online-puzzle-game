loadProgress();
function loadProgress(){
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
		$('#btnJmp').attr('disabled','true');
		$('input#goto_').attr('disabled','true');
	}
	
}
function clearAll(){
	if(confirm('确定清除本游戏所有数据（包括进度存档、笔记内容）？')){
		var i;
		for(i=0; i<localStorage.length; i++){
			var key_=localStorage.key(i);
			if(key_.indexOf('onlinePuzzleGame-')===0)
				localStorage.removeItem(key_);
		}
	}
	alert('数据已清除。')
	loadLevel(0);
}