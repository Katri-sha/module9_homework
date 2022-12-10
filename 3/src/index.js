const button = document.querySelector(".btn");
const divResult = document.querySelector(".show-result");
const inputNumber = document.querySelector("input");

function checkNumber(number) {
	number = +number;
	if (number > 10 || number < 1) {
		divResult.innerHTML = `<div class = 'text'>Число вне диапазона от 1 до 10</div>`;
	} else useRequest();
}

function useRequest() {
	var xhr = new XMLHttpRequest();
	xhr.open(
		"GET",
		`https://picsum.photos/v2/list?limit=${inputNumber.value}`,
		true
	);

	xhr.onload = function () {
	if (xhr.status !== 200) {
		console.log("Статус ответа: ", xhr.status);
	} else {
		const result = JSON.parse(xhr.response);
	displayResult(result);
	}
	};

	xhr.onerror = function () {
		console.log("Ошибка! Статус ответа: ", xhr.status);
	};

	xhr.send();
}

function displayResult(apiData) {
	let cards = "";
	apiData.forEach((item) => {
		const cardBlock = `<img src="${item.download_url}" class="card-image"/>`;
		cards = cards + cardBlock;
	});
	divResult.innerHTML = `<div class="card"></div> ${cards} </div>`;
}

button.addEventListener("click", () => {
checkNumber(inputNumber.value);
});