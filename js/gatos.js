var cats = {
	"cats" :[{
		"nome": "João",
		"imagem": "images/gato1.jpg", 
	},{
		"nome": "Ambrósio",
		"imagem": "images/gato2.jpg", 
	},{
		"nome": "Almeida",
		"imagem": "images/gato3.jpg", 
	},{
		"nome": "António",
		"imagem": "images/gato4.jpg", 
	},{
		"nome": "André",
		"imagem": "images/gato5.jpg", 
	},{
		"nome": "Adolfo",
		"imagem": "images/gato6.jpg", 
	}]
};

$(document).ready(function() {
	cats.cats.forEach( function(element, index) {

		$('#dropdownMenuGatos').append(HTMLListElement.replace("%data%",element.nome));
	});	
})
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