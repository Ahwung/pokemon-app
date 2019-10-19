



$(() => {


	// Variables for next and previous buttons
	let currentImgIndex = 0;
	let highestImgIndex = $('.carousel-images').children().length - 1

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

	// Ajax call to get data from PokeAPI
	$.ajax({
		url: "https://pokeapi.co/api/v2/pokemon/1",
		type: "GET",
	}).then(
	(data) => {
		console.log(data);
	})
	
});