
$(() => {

	for (let i = 1; i <= 3; i++) {
		$.ajax({
			url: "https://pokeapi.co/api/v2/pokemon/" + i,
			type: "GET",
		}).then(
		(data) => {
			console.log(data.sprites.front_default)
			const $img = $()
		})
	}
	
	
});