const HTMLdeFooter = () => {
	return `<input type=number class="Quantity"/><button class="Pintar">Mostrar</div>`;
};

const HTMLdeMain = () => {
	return `<!--div class="container"></div-->`;
};

const getCharacters = async (Qty) => {
	const data = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");
	const result = await data.json();
	const characters = result.data;
	const limitedCharacters = characters.slice(0, Qty);
	printCharacters(limitedCharacters);
};

const printCharacters = (list) => {
	const container = document.querySelector("main");
	for (const character of list) {
		const div = document.createElement("div");
		div.classList.add("LaCarta");
		div.innerHTML = `
				<div class="LaImagen">
				<img src="${character.card_images[0].image_url}" />
				</div>
				<div class="TipoCarta"></div>
				<div class="Rareza"></div>
				<div class="OtroNombre"></div>
				</div>

    `;
		container.appendChild(div);
	}
};

const Main = () => {
	document.querySelector("main").innerHTML = HTMLdeMain();
	document.querySelector("footer").innerHTML = HTMLdeFooter();
	getCharacters(0);
	const myBtn = document.querySelector(".Pintar");
	const myInput = document.querySelector(".Quantity");
	//Le damos funcionalidad al botón
	myBtn.addEventListener("click", () => {
		document.querySelector("main").innerHTML = "";
		getCharacters(myInput.value);
	});
};

Main();

//data.card_images.image_url
//data is object, carrd_images is obj
//https://images.ygoprodeck.com/images/cards/34541863.jpg
//data.type                   Spell Card
//data.card_sets.set_name     Force of the Breaker
//data.card_sets.set_rarity   Common
//console.log(character.card_images[0].image_url);
//console.log(character.type);
