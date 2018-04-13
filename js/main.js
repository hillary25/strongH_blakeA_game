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
		previousTarget = null,
		delay = 1200;

const game = document.getElementById('game'),
			grid = document.createElement('section');
			grid.setAttribute('class', 'grid');
			game.appendChild(grid);

	resetScreen = document.querySelector('.reset-screen');

gameGrid.forEach(item => {
	const card = document.createElement('div');
	card.classList.add('card');
	card.dataset.name = item.name;

	const front = document.createElement('div');
	front.classList.add('front');

	const back = document.createElement('div');
	back.classList.add('back');
	back.style.backgroundImage = `url(${item.img})`;

	grid.appendChild(card);
	card.appendChild(front);
	card.appendChild(back);
});

const	match = () => {
			var selected = document.querySelectorAll('.selected');
			selected.forEach(card => {
				card.classList.add('match');
			});
			resetGuesses();
		}

const resetGuesses = () => {
	firstGuess = '';
	secondGuess = '';
	count = 0;

	var selected = document.querySelectorAll('.selected');
	selected.forEach(card => {
		card.classList.remove('selected');
	});
};

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
		let clicked = event.target;
		if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected')) {
			return;
		}
		if (count < 2) {
			count++;
			if (count === 1) {
				firstGuess = clicked.parentNode.dataset.name;
				console.log(firstGuess);
				clicked.parentNode.classList.add('selected');
		 	} else {
			 	secondGuess = clicked.parentNode.dataset.name;
				console.log(secondGuess);
			 	clicked.parentNode.classList.add('selected');
		 	}
			 if (firstGuess !== '' && secondGuess !== '') {
			 	if (firstGuess === secondGuess) {
			 		match();
				}
				if (firstGuess === secondGuess) {
					setTimeout(match, delay);
					//setTimeout(resetGuesses, delay);
				} else {
					setTimeout(resetGuesses, delay);
				}
		}
		previousTarget = clicked;
	}
	};

	//Event Handling
	//grid.addEventListener('click', selectCard);
	grid.addEventListener('click', matchCard);
	resetButton.addEventListener('click', resetGame);

})();
