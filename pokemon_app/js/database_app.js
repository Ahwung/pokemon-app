$(() => {
	let cover1 = true;
	let cover2 = true;
	let cover3 = true;

	$(".gen-1-title").on("click", event => {
		if (cover1 === true) {
			$(".gen-1-sprites").hide();
			cover1 = false;
		} else if (cover1 === false) {
			$(".gen-1-sprites").show();
			cover1 = true;
		}
	});

	$(".gen-2-title").on("click", event => {
		if (cover2 === true) {
			$(".gen-2-sprites").hide();
			cover2 = false;
		} else if (cover2 === false) {
			$(".gen-2-sprites").show();
			cover2 = true;
		}
	});

	$(".gen-3-title").on("click", event => {
		if (cover3 === true) {
			$(".gen-3-sprites").hide();
			cover3 = false;
		} else if (cover3 === false) {
			$(".gen-3-sprites").show();
			cover3 = true;
		}
	});

	for (let i = 1; i <= 151; i++) {
		$.ajax({
			url: "https://pokeapi.co/api/v2/pokemon/" + i,
			type: "GET"
		}).then(data => {
			// console.log(data.sprites.front_default)
			const $img = $("<img>")
				.attr("src", data.sprites.front_default)
				.attr("alt", data.name)
				.attr("id", data.id)
				.attr("title", data.name)
				.addClass("pokemonImage");
			$(".gen-1-sprites").append($img);
			$(`#${data.id}`).on("click", event => {
				console.log(event.target);
			});
		});
	}

	for (let i = 152; i <= 251; i++) {
		$.ajax({
			url: "https://pokeapi.co/api/v2/pokemon/" + i,
			type: "GET"
		}).then(data => {
			// console.log(data.sprites.front_default)
			const $img = $("<img>")
				.attr("src", data.sprites.front_default)
				.attr("alt", data.name)
				.attr("id", data.id)
				.attr("title", data.name)
				.addClass("pokemonImage");
			$(".gen-2-sprites").append($img);
			$(`#${data.id}`).on("click", event => {
				console.log(event.target);
			});
		});
	}

	for (let i = 252; i <= 386; i++) {
		$.ajax({
			url: "https://pokeapi.co/api/v2/pokemon/" + i,
			type: "GET"
		}).then(data => {
			// console.log(data.sprites.front_default)
			const $img = $("<img>")
				.attr("src", data.sprites.front_default)
				.attr("alt", data.name)
				.attr("id", data.id)
				.attr("title", data.name)
				.addClass("pokemonImage");
			$(".gen-3-sprites").append($img);
			$(`#${data.id}`).on("click", event => {
				console.log(event.target);
			});
		});
	}
});
