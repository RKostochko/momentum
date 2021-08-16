const date = new Date();
const hours = date.getHours();
const input = document.querySelector('.name');

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
	document.querySelector('.greeting').innerHTML = greetingText;
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
