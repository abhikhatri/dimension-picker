$(document).ready(function() {
	
	var offset = $("#dimension-picker-mousecatcher").offset();

	$('#dimension-picker-mousecatcher').mousemove(function(e) {

	  var offset = $(this).offset();
	  var relativeX = (e.pageX - offset.left);
	  var relativeY = (e.pageY - offset.top);

	  console.log("X: " + relativeX + "  Y: " + relativeY);

	});

});