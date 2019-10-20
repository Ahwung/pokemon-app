
const pokemon = ['bulbasaur', 'charmander', 'squirtle', 'pikachu']


$(() => {


	// Variables for next and previous buttons
	let currentImgIndex = 0;
	let highestImgIndex = $('.carousel-images').children().length - 1

	// Variable to set current picture
	let currentPokemon = ''

	// Variable for submit button pressed
	let choice

	// Click event to get value of submit input value
	$('input[type="submit"]').on('click', (event) => {
		choice = event.target.value;
	})

	// Click event for Search and Random buttons
	$('form').on('submit', (event) => {
		let userInput = $('input[type="text"]').val()

		$('.carousel-images').children().eq(currentImgIndex).hide();

		// Changing image index for searched value
		// if (choice == 'Search') {
		// 	if (userInput == 'bulbasaur') {
		// 		currentImgIndex = 0
		// 	} else if (userInput == 'charmander') {
		// 		currentImgIndex = 1
		// 	} else if (userInput == 'squirtle') {
		// 		currentImgIndex = 2
		// 	} else if (userInput == 'pikachu') {
		// 		currentImgIndex = 3
		// 	} else {
		// 		alert("Pokemon not found")
		// 	}
		// 	$('.carousel-images').children().eq(currentImgIndex).show();
		// }

		if (choice == "Search") {
			currentImgIndex = pokemon.indexOf(userInput)
			$('.carousel-images').children().eq(currentImgIndex).show();
			console.log(currentImgIndex)
			if (currentImgIndex == -1) {
				alert("Pokemon not found")
			}
		} else if (choice == 'Random' ) {
			currentImgIndex = Math.floor(Math.random() * $('.carousel-images').children().length)
				$('.carousel-images').children().eq(currentImgIndex).show();
		} 

		// Generating random number and changing carousel image for current index number
		// if (choice == 'Random' ) {
		// 	currentImgIndex = Math.floor(Math.random() * $('.carousel-images').children().length)
		// 		$('.carousel-images').children().eq(currentImgIndex).show();
		// }
	})

	// Click event for next button
	$('.next').on('click', () => {
		$('.carousel-images').children().eq(currentImgIndex).hide();
		if (currentImgIndex < highestImgIndex) {
			currentImgIndex++;
		} else {
			currentImgIndex = 0
		}
		$('.carousel-images').children().eq(currentImgIndex).show()
	})

	// Click event for previous button
	$('.previous').on('click', () => {
		$('.carousel-images').children().eq(currentImgIndex).hide()
		if (currentImgIndex > 0) {
			currentImgIndex--;
		} else {
			currentImgIndex = highestImgIndex
		}
		$('.carousel-images').children().eq(currentImgIndex).show();
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