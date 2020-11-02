const newYears = '1 Jan 2021';
const daysContainer = document.querySelector('#days');
const hoursContainer = document.querySelector('#hours');
const minutesContainer = document.querySelector('#minutes');
const secondsContainer =document.querySelector('#seconds');


function countdown() {
   const newYearsDate = new Date(newYears);
   const currentDate = new Date();

   const totalSeconds = new Date(newYearsDate - currentDate) / 1000;
   const days = Math.floor(totalSeconds / 3600 / 24);
   const hours = Math.floor(totalSeconds / 3600) % 24;
   const minutes = Math.floor(totalSeconds / 60) % 60;
   const seconds = Math.floor(totalSeconds % 60);

   daysContainer.innerHTML = days;
   hoursContainer.innerHTML = formatTime(hours);
   minutesContainer.innerHTML = formatTime(minutes);
   secondsContainer.innerHTML = formatTime(seconds);

   console.log(days, hours, minutes, seconds)
}

function formatTime(time) {
   return time < 10 ? (`0${time}`) : time;
}

// Initial Call
countdown();

setInterval(countdown, 1000);