



$(() => {

	let currentImgIndex = 0;
	let highestImgIndex = $('.carousel-images').children().length - 1

	$('.next').on('click', () => {
		$('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
		if (currentImgIndex < highestImgIndex) {
			currentImgIndex++;
		} else {
			currentImgIndex = 0
		}
		$('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
	})

	$('.previous').on('click', () => {
		$('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
		if (currentImgIndex > 0) {
			currentImgIndex--;
		} else {
			currentImgIndex = highestImgIndex
		}
		$('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
	})


	$.ajax({
		url: "https://pokeapi.co/api/v2/pokemon/1",
		type: "GET",
	}).then(
	(data) => {
		console.log(data);
	})
	
});