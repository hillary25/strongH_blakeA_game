//JavaScript Document
(() => {
	console.log('Starship Troopers game fired!');

	//Variables
	const cards = [{
		'name': 'badge',
		'img': 'images/badge.svg',
	},
	{
		'name': 'helmet',
		'img': 'images/helmet.svg',
	},
	{
		'name': 'gun',
		'img': 'images/gun.svg',
	},
	{
		'name': 'ship',
		'img': 'images/ship.svg',
	},
	{
		'name': 'star',
		'img': 'images/star.svg',
	},
	{
		'name': 'title',
		'img': 'images/title.svg',
	},
	{
		'name': 'planet',
		'img': 'images/planet.svg',
	},
	{
		'name': 'trooper',
		'img': 'images/trooper.svg',
	},
];

let gameGrid = cards.concat(cards);
gameGrid.sort(() => 0.5 - Math.random());

let	firstGuess = '',
		secondGuess = '',
		count = 0,
		previousTarget = null;

const game = document.getElementById('game'),
			grid = document.createElement('section');
			grid.setAttribute('class', 'grid');
			game.appendChild(grid);

	resetScreen = document.querySelector('.reset-screen');

gameGrid.forEach(item => {
	const card = document.createElement('div');
	card.classList.add('card');
	card.dataset.name = item.name;
	card.style.backgroundImage = `url(${item.img})`;
	grid.appendChild(card);
});

const	match = () => {
			var selected = document.querySelectorAll('.selected');
			selected.forEach(card => {
				card.classList.add('match');
			});
		}

	//Functions
	// function showResetScreen(message) {
	// 	//user has won, reset stuff and start game over
	// 	resetScreen.classList.add('CHANGE THIS');
	// 	resetScreen.querySelector('h3').textContent = message;
	// }

	// function selectCard(e) {
	// 	let clicked = e.target;
	// 	if (clicked.nodeName === 'SECTION') {
	// 		return;
	// 	}
	// }

	function matchCard() {
		let clicked = e.target;
		if (clicked.nodeName === 'SECTION') {
			return;
		}
		if (count < 2) {
			count++;
			if (count === 1) {
				firstGuess = clicked.dataset.name;
				console.log(firstGuess);
				clicked.classList.add('selected');
		 	} else {
			 	secondGuess = clicked.dataset.name;
				console.log(secondGuess);
			 	clicked.classList.add('selected');
		 	}
			 if (firstGuess !== '' && secondGuess !== '') {
			 	if (firstGuess === secondGuess) {
			 		match();
				}
			previousTarget = clicked;
		}
	};

	//Event Handling
	//grid.addEventListener('click', selectCard);
	grid.addEventListener('click', matchCard);
	resetButton.addEventListener('click', resetGame);


})();
