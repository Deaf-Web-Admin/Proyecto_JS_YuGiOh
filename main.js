const HTMLdeMain = () => {
	return `<div class="container"></div>`;
};

const getAllCardsInfo = async () => {
	const data = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php`);
	const dataJSON = await data.json();
	printData(dataJSON);
};

const printData = (data) => {
	const container = document.querySelector(".container");
	container.innerHTML = `
				<div class="LaCarta">
				<div class="LaImagen">
				<img src="${data.data[3].card_images[0].image_url}" />
				</div>
				<div class="TipoCarta">${data.data[3].type}</div>
				<div class="Rareza">${data.data[3].card_sets[0].set_rarity}</div>
				<div class="OtroNombre">${data.data[3].card_sets[0].set_name}</div>
				</div>
				</div>
  `;
};
const Main = () => {
	document.querySelector("main").innerHTML = HTMLdeMain();
	getAllCardsInfo();
};

Main();

//https://db.ygoprodeck.com/api/v7/cardinfo.php

//data.card_images.image_url
//data is object, carrd_images is obj
//https://images.ygoprodeck.com/images/cards/34541863.jpg

//data.type                   Spell Card
//data.card_sets.set_name     Force of the Breaker
//data.card_sets.set_rarity   Common

/*

*/
