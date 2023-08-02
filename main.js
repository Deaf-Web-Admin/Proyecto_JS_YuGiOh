const HTMLdeFooter = () => {
	return `<input type=number class="Quantity1" placeholder="Desde"/><input type=number class="Quantity2"placeholder="Hasta"/><button class="Pintar">Mostrar</div>`;
};

const HTMLdeMain = () => {
	return ``;
};

const getCharacters = async (Qty1, Qty2) => {
	const data = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");
	const result = await data.json();
	const characters = result.data;
	const limitedCharacters = characters.slice(Qty1, Qty2);
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
    `;
		container.appendChild(div);
	}
};

const Main = () => {
	document.querySelector("main").innerHTML = HTMLdeMain();
	document.querySelector("footer").innerHTML = HTMLdeFooter();
	getCharacters(0, 0);
	const myBtn = document.querySelector(".Pintar");
	const myInput1 = document.querySelector(".Quantity1");
	const myInput2 = document.querySelector(".Quantity2");
	myBtn.addEventListener("click", () => {
		document.querySelector("main").innerHTML = "";
		getCharacters(myInput1.value, myInput2.value);
	});
};

Main();
