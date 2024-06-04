const week = document.querySelector(".clock__week"),
	year = document.querySelector(".clock__year ");

let date = new Date(),
	weekDate = date.getDay(),
	yearDate = date.getFullYear();

switch (weekDate) {
	case 1:
		weekDate = "Monday";
		break;
	case 2:
		weekDate = "Tuesday";
		break;
	case 3:
		weekDate = "Wednesday";
		break;
	case 4:
		weekDate = "Thursday";
		break;
	case 5:
		weekDate = "Friday";
		break;
	case 6:
		weekDate = "Saturday";
		break;
	case 7:
		weekDate = "Sunday";
		break;
	default:
		break;
}

week.innerHTML = weekDate;
year.innerHTML = yearDate;

function updateClock() {
	let currentTime = new Date();
	let hours = currentTime.getHours();
	let minutes = currentTime.getMinutes();
	let seconds = currentTime.getSeconds();
	minutes = (minutes < 10 ? "0" : "") + minutes;
	seconds = (seconds < 10 ? "0" : "") + seconds;

	let timeString = hours + ":" + minutes + ":" + seconds;

	document.querySelector(".clock__time").textContent = timeString;
}

setInterval(updateClock, 1000);
