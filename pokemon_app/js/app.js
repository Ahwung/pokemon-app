

$(() => {

	$.ajax({
		url: "https://pokeapi.co/api/v2/pokemon/1",
		type: "GET",
	}).then(
	(data) => {
		console.log(data);
	})
	
});