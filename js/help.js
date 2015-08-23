function loadHelp(){
$.get( "help.html", function( data ) {
  $( "#help-wrapper" ).html( data );
});
}