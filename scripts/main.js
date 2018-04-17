$(document).ready(function() {
	
	$('.dimension-picker-mousecatcher').mousemove(function(e) {

		var currentElement = $(this);
		var offset = currentElement.offset();
		var relativeX = (e.pageX - offset.left);
		var relativeY = (e.pageY - offset.top);

		var highlightedCols = Math.ceil(relativeX/18);
		var highlightedRows = Math.ceil(relativeY/18);

		var updateCurrentMatrix = function(updateElement, updatedValue){
			
			if(updatedValue <= 19 && updatedValue >= 5){
				updatedValue = updatedValue+1;
			} else if(updatedValue < 5) {
				updatedValue = 5;
			}

			switch(updateElement){
				case 'row':
					currentElement.siblings('.dimension-picker-unhighlighted').css('height', updatedValue + 'em');
					break;

				case 'col':
					currentElement.siblings('.dimension-picker-unhighlighted').css('width', updatedValue + 'em');	
					break;
			}

		};

	  if(highlightedCols && highlightedRows){
	  	updateCurrentMatrix('row', highlightedRows);
	  	updateCurrentMatrix('col', highlightedCols);
	  	currentElement.siblings('.dimension-picker-highlighted').css({'width': highlightedCols + 'em', 'height': highlightedRows + 'em'});
	  } else if(highlightedCols){
	  	updateCurrentMatrix('col', highlightedCols);
	  	currentElement.siblings('.dimension-picker-highlighted').css('width', highlightedCols + 'em');
	  } else if(highlightedRows){
	  	updateCurrentMatrix('row', highlightedRows);
	  	currentElement.siblings('.dimension-picker-highlighted').css('height', highlightedRows + 'em');
	  }
		

	  // To show the value of selected rows and columns
	  $('#dimension-picker-status').html('<span>' + highlightedCols + 'x' + highlightedRows +'</span>');

	});

});