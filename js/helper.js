$(document)
.on('click', '#img_gato', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('#badge1_id').html(function(i,value) { return +value+1;})
})
.on('click', '#img_gato2', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('#badge2_id').html(function(i,value) { return +value+1;})
});