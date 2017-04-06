var HTMLOptionElement = '<option value="%value%">%data%</option>';
var cats = {
	"cats" :[{
		"nome": "João",
		"imagem": "images/gato.jpg",
		"contagem": 0,
	},{
		"nome": "Ambrósio",
		"imagem": "images/gato2.jpg",
		"contagem": 0,
	},{
		"nome": "Almeida",
		"imagem": "images/gato3.jpg",
		"contagem": 0,
	},{
		"nome": "António",
		"imagem": "images/gato4.jpg",
		"contagem": 0,
	},{
		"nome": "André",
		"imagem": "images/gato5.jpg",
		"contagem": 0,
	},{
		"nome": "Adolfo",
		"imagem": "images/gato6.jpg",
		"contagem": 0,
	}]
};

$(document).ready(function() {
	cats.cats.forEach( function(element, index) {
		$('#dropdownMenuGatos').append(HTMLOptionElement.replace("%data%",element.nome).replace("%value%",index));
	});	
})
.on('click', '#dropdownMenuGatos', function(event) {
	event.preventDefault();
	/* Act on the event */
	//console.log($('#dropdownMenuGatos option:selected').val());

	$('#nomeGato').html(cats.cats[$('#dropdownMenuGatos option:selected').val()].nome);
	$('#imagemGato').attr("src",cats.cats[$('#dropdownMenuGatos option:selected').val()].imagem);
	
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



