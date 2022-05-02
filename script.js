const daysStart = document.getElementById("days");
const hoursStart = document.getElementById("hours");
const minutesStart = document.getElementById("minutes");
const secondstart = document.getElementById("seconds");

const newYearCountdown = "1 Jan 2023";

function yearCountdown() {
    const newYearDate = new Date(newYearCountdown);
    const currentDate = new Date();

    const secondsCount = (newYearDate - currentDate) / 1000;

    const days = Math.floor (secondsCount / 3600 / 24 );
    const hours = Math.floor (secondsCount / 3600) % 24;
    const minutes = Math.floor (secondsCount / 60) % 60;
    const seconds = Math.floor (secondsCount) % 60 ;

    daysStart.innerHTML = days;
    hoursStart.innerHTML = timeFormat(hours);
    minutesStart.innerHTML = timeFormat(minutes);
    secondstart.innerHTML = timeFormat(seconds);
}

function timeFormat(time) {
    return time < 10 ? `0${time}` : time;
}

yearCountdown ();

setInterval (yearCountdown, 1000);