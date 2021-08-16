function showTime() {
	const date = new Date();
	const currentTime = date.toLocaleTimeString();
	document.querySelector(".time").innerHTML = currentTime;
	
	const options = {day: 'numeric', weekday: 'long', month: 'long'};
	const currentDate = date.toLocaleDateString('en-US', options);
	document.querySelector('.date').innerHTML = currentDate;

	setTimeout(showTime, 1000);
}
showTime();


console.log(currentDate);



