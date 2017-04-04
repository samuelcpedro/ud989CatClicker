$(document)
.on('click', '#img_gato', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('#badge_id').html(function(i,value) { return +value+1;})
});