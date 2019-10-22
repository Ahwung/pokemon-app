
$(() => {

	for (let i = 1; i <= 151; i++) {
		$.ajax({
			url: "https://pokeapi.co/api/v2/pokemon/" + i,
			type: "GET",
		}).then(
		(data) => {
			// console.log(data.sprites.front_default)
			const $img = $('<img>').attr('src', data.sprites.front_default).attr('alt', data.name)
			$('.gen-1').append($img)
		})
	}
	
	
});