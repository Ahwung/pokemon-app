

$(() => {

	const getData = () => {

	}

	$('.close').on('click', () => {
		$('.modal').hide();
	})

	for (let i = 1; i <= 151; i++) {
		$.ajax({
			url: "https://pokeapi.co/api/v2/pokemon/" + i,
			type: "GET",
		}).then(
		(data) => {
			// console.log(data.sprites.front_default)
			const $img = $('<img>').attr('src', data.sprites.front_default).attr('alt', data.name).attr('id', data.id).addClass('pokemonImage')
			$('.gen-1-sprites').append($img)


		}).then(() => {
			$('.pokemonImage').on('click', (event) => {
				console.log(event.target)
			})
		})
	}


	
	
});