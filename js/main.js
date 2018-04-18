//Based off tutorial https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/

//JavaScript Document
(() => {
	console.log('Starship Troopers game fired!');

	var cards,
		gameGrid,
		cardSet,
		firstGuess = '',
		secondGuess = '',
		count = 0,
		previousTarget = null,
		delay = 1200,
		score = 0,
		resetScreen = document.querySelector('.reset-screen'),
		resetButton = resetScreen.querySelector('button');


//Array of Cards
function init() {
 cards = [{
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
	],
		  game = document.querySelector('#game'),
		  grid = document.querySelector('.grid');



		gameGrid = cards.concat(cards),
		cardSet = document.querySelector('.card'),

  //Shuffle cards
	gameGrid.sort(() => 0.5 - Math.random());



	//Card Creation Loop
	gameGrid.forEach(item => {
		const {name, img} = item;

		const card = document.createElement('div');
		card.classList.add('card');
		card.dataset.name = name;

		//front of cards
		const front = document.createElement('div');
		front.classList.add('front');

		//back of cards (with image)
		const back = document.createElement('div');
		back.classList.add('back');
		back.style.backgroundImage = `url(${item.img})`;

		grid.appendChild(card);
		card.appendChild(front);
		card.appendChild(back);
	});

	grid.addEventListener('click', selectCard);
	resetButton.addEventListener('click', resetGame);
	debugger;
	}

	//Match Function
	const match = () => {
		selected = document.querySelectorAll('.selected');
		selected.forEach(card => {
			card.classList.add('match');
			score ++;
			if (score === 16) {
                //debugger;
				showResetScreen();
			}
			document.querySelector('h4').textContent = `Score: ${score}`;
		});
	}

	//Reset Guesses Function
	const resetGuesses = () => {
		firstGuess = '';
		secondGuess = '';
		count = 0;
		previousTarget = null;

		var selected = document.querySelectorAll('.selected');
		selected.forEach(card => {
			card.classList.remove('selected');
		});
	};

	//Card Selection Function
	function selectCard() {
		const clicked = event.target;

		if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
			return;
		}
		//if number of selections is less than two
		if (count < 2) {
			count++;
			//if it is the first selection, record what the card is and select it
			if (count === 1) {
				firstGuess = clicked.parentNode.dataset.name;
				console.log(firstGuess);
				clicked.parentNode.classList.add('selected');
			//otherwise it is the second selection, record the card and select it
		 	} else {
			 	secondGuess = clicked.parentNode.dataset.name;
				console.log(secondGuess);
			 	clicked.parentNode.classList.add('selected');
		 	}
			//if the selections are not empty
			if (firstGuess !== '' && secondGuess !== '') {
				//and if they match
				if (firstGuess === secondGuess) {

						//run the match function and flip the cards
						setTimeout(match, delay);
					} else {
				}
					//otherwise reset the guesses and flip the cards
					setTimeout(resetGuesses, delay);
				}
			previousTarget = clicked;
		}
	}

	//Reset screen
	function showResetScreen(message) {
		//user has won, reset stuff and start game over
		console.log('you win');
		resetScreen.classList.add('show-screen');
	}

	function resetGame() {
		score = 0;
		document.querySelector('h4').textContent = `Score: ${score}`;

		firstGuess = '';
		secondGuess = '';
		count = 0;
		previousTarget = null;

		var selected = document.querySelectorAll('.selected');
		selected.forEach(card => {
			card.classList.remove('selected');
		});

		var selected = document.querySelectorAll('.match');
		selected.forEach(card => {
			card.classList.remove('match');
		});

		resetScreen.classList.remove('show-screen');
		cards=[];

		// remove all the cards
		while (grid.firstChild) {
			grid.removeChild(grid.firstChild);
		}

		init();
	}

	init();
})();
