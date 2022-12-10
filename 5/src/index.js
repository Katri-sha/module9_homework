const button = document.querySelector(".btn");
const divResult = document.querySelector(".show-result");
divResult.innerHTML = localStorage.getItem('key');

function checkNumber() {
	const page = +document.querySelector("#number-1").value;
	const limit = +document.querySelector("#number-2").value;
	if ( (page <= 10) && (page >=1) && (limit >=1) && (limit <= 10) ) {
		useRequest(page,limit);
	} else  {
		if (page < 1 || page > 10 || isNaN(page)) {
			if  (limit < 1 || limit > 10 || isNaN(limit)) {
				divResult.innerHTML = `<div class = 'text'>Номер страницы и лимит вне диапазона от 1 до 10</div>`;
				localStorage.clear();
			} else {
				divResult.innerHTML = `<div class = 'text'>Номер страницы вне диапазона от 1 до 10</div>`;
				localStorage.clear();
			}
		} else {
			divResult.innerHTML = `<div class = 'text'>Лимит вне диапазона от 1 до 10</div>`;
			localStorage.clear();
		}
	}
}

function useRequest(page,limit) {
	fetch(` https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
	.then((response) => {
	return response.json();
	})
	.then((data) => {
		let cards = '';
		data.forEach(item => {
		  const cardBlock = `
			  <img
				src="${item.download_url}"
				class="card-image"
			  />`;
		  cards = cards + cardBlock;
		});
		divResult.innerHTML = `<div class = "card">${cards}</div>`;
		localStorage.setItem(`key`, cards);
	})
	.catch(() => { console.log('error') });
}

button.addEventListener('click', () => {
	checkNumber();
  });
  