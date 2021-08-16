const date = new Date();
const hours = date.getHours();

const input = document.querySelector('.name');
const greeting = document.querySelector('.greeting');

const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

let randomNum;

function showTime() {
	const date = new Date();
	const currentTime = date.toLocaleTimeString();
	document.querySelector(".time").innerHTML = currentTime;
	
	const options = {day: 'numeric', weekday: 'long', month: 'long'};
	const currentDate = date.toLocaleDateString('en-US', options);
	document.querySelector('.date').innerHTML = currentDate;

	showGreeting();

	setTimeout(showTime, 1000);
}
showTime();

// Required refactor
function getTimeOfDay() {
	if (hours >= 0 && hours < 6) {
		return 'night';
	} else if (hours >= 6 && hours < 12) {
		return 'morning';
	} else if (hours >= 12 && hours < 18) {
		return 'day';
	} else {
		return 'evening'
	}
}

function showGreeting() {
	const timeOfDay = getTimeOfDay();
	const greetingText = `Good ${timeOfDay}`;
	greeting.innerHTML = greetingText;
}

function setLocalStorage() {
	localStorage.setItem('name', input.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
	if(localStorage.getItem('name')) {
		input.value = localStorage.getItem('name');
	}
}
window.addEventListener('load', getLocalStorage);

function getNumberNow(min, max){
	min = 1;
	max = 20;
	randomNum = Math.floor(Math.random() * (max - min + 1) + min);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function setBg(){
	const timeOfDay = getTimeOfDay();
	const bgNum = getNumberNow().toString().padStart(2, "0");

	document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
}
setBg();

function getSlideNext() {
	if (randomNum === 20){
		randomNum = 01;
	} else {
		randomNum = randomNum + 1;
	}
	
	setBg();
}
slideNext.addEventListener('click', getSlideNext);

function getSlidePrev() {
	if (randomNum === 01) {
		randomNum = 20;
	} else {
		randomNum = randomNum - 1;
	}
	setBg();
}
slidePrev.addEventListener('click', getSlidePrev);