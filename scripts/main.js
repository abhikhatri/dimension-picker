$(document).ready(function() {
	
	var offset = $("#dimension-picker-mousecatcher").offset();

	$('#dimension-picker-mousecatcher').mousemove(function(e) {

	  var offset = $(this).offset();
	  var relativeX = (e.pageX - offset.left);
	  var relativeY = (e.pageY - offset.top);

	  var highlightedCols= Math.ceil(relativeX/18);
	  var highlightedRows= Math.ceil(relativeY/18);

	  if(highlightedCols && highlightedRows){
	  	$('#dimension-picker-highlighted').css({'width': highlightedCols + 'em', 'height': highlightedRows + 'em'});
	  } else if(highlightedCols){
	  	$('#dimension-picker-highlighted').css('width', highlightedCols + 'em');	
	  } else if(highlightedRows){
	  	$('#dimension-picker-highlighted').css('height', highlightedRows + 'em');	
	  }
		

	  // To show the value of selected rows and columns
	  $('#dimension-picker-status').html('<span>' + highlightedCols + 'x' + highlightedRows +'</span>');

	});

});