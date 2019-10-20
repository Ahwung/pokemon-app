
const pokemon = ['bulbasaur', 'charmander', 'squirtle', 'pikachu']


$(() => {


	// Variables for next and previous buttons
	let currentImgIndex = 0;
	let highestImgIndex = $('.carousel-images').children().length - 1

	// Variable to set current picture
	let currentPokemon = ''

	// Click event for next button
	$('.next').on('click', () => {
		$('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
		if (currentImgIndex < highestImgIndex) {
			currentImgIndex++;
		} else {
			currentImgIndex = 0
		}
		$('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
	})

	// Click event for previous button
	$('.previous').on('click', () => {
		$('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
		if (currentImgIndex > 0) {
			currentImgIndex--;
		} else {
			currentImgIndex = highestImgIndex
		}
		$('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
	})

	// Click event to close modal box
	$('.close').on('click', () => {
		$('.modal').hide();
	})

	// Ajax call to get data from PokeAPI
	$('img').on('click', (event) => {

		event.preventDefault();

		// Setting current pokemon so that Ajax call will display correct infomration
		if (currentImgIndex == 0) {
			currentPokemon = 'bulbasaur'
		} else if (currentImgIndex == 1) {
			currentPokemon = 'charmander'
		} else if (currentImgIndex == 2) {
			currentPokemon = 'squirtle'
		} else if (currentImgIndex == 3) {
			currentPokemon = 'pikachu'
		}


		$.ajax({
			url: "https://pokeapi.co/api/v2/pokemon/" + currentPokemon,
			type: "GET",
		}).then(
		(data) => {
			$('.name').text("Pokemon: " + data.name)
			$('.pokedex-number').text("Pokedex Number: " + data.id)
			$('.weight').text("Weight: " + data.weight)
			$('.height').text("Height: " + data.height)
		})

		$('.modal').show();
	})
	
});