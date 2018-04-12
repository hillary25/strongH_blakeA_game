//JavaScript Document
(() => {
	console.log('Starship Troopers game fired!');
	
	//Variables
	resetScreen = document.querySelector('.reset-screen')
	
	
	//Functions
	function showResetScreen(message) {
		//user has won, reset stuff and start game over
		resetScreen.classList.add('CHANGE THIS');
		resetScreen.querySelector('h3').textContent = message;
	}
	
	
	//Event Handling
	resetButton.addEventListener('click', resetGame);
		
	
})();
