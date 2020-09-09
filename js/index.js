const score = document.querySelector('.score');
const start = document.querySelector('.start');
const gameArea = document.querySelector('.gameArea');
const car = document.createElement('div'); 

car.classList.add('car');

start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

const keys = {
	ArrowUp: false,
	ArrowDown: false,
	ArrowRight: false,
	ArrowLeft: false
};

const setting = {
	start: false,
	score: 0,
	speed: 3
};

function startGame() {
	start.classList.add('hide');
	setting.start = true;
	requestAnimationFrame(playGame);
	gameArea.appendChild(car);
};

function playGame() {
	console.log('Play game!');
	if (setting.start) {
		requestAnimationFrame(playGame);
	};
};

function startRun(event) {
	if (event.key !== 'F5' && event.key !== 'F12') {
		event.preventDefault();
		keys[event.key] = true;
	};
	
};

function stopRun(event) {
	event.preventDefault();
	keys[event.key] = false;
};
