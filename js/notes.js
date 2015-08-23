function setNotesContent(text){
	document.getElementById('user-note').value=text;
	if(text)
		document.getElementById('user-note-holder').classList.add('is-dirty');
	else
		document.getElementById('user-note-holder').classList.remove('is-dirty');
}

function clearNotes(){
	setNotesContent('');
	storeNotes();
}

function restoreNotes(){
	storedUserNotes=localStorage.getItem('onlinePuzzleGame-userNotes');
	setNotesContent(storedUserNotes);
}

function storeNotes(){
	localStorage.setItem('onlinePuzzleGame-userNotes',document.getElementById('user-note').value);
}
