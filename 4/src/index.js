const button = document.querySelector(".btn");
const divResult = document.querySelector(".show-result");

function checkNumber() {
	const number1 = +document.querySelector("#number-1").value;
	const number2 = +document.querySelector("#number-2").value;
	if ( (number1 <= 300) && (number2 <=300) && (number1 >=100) && (number2 >= 100)) {
		useRequest(number1,number2);
	} else {	
		divResult.innerHTML = `<div class = 'text'>Одно из чисел или оба числа вне диапазона от 100 до 300</div>`;
	}
}

function useRequest(number1,number2) {
	fetch(`https://picsum.photos/${number1}/${number2}`)
	.then((response) => {
		return response;})
	.then((data) => {
        divResult.innerHTML = `<img src=${data.url} style = "margin: 20px">`
	})
	.catch(() => { console.log('error') });

}
button.addEventListener("click", () => {
	checkNumber();
});