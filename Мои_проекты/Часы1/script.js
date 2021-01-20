const clock = document.querySelector(`#clock`);
const color = document.querySelector(`#color`);

function hexOclock() {
  let time = new Date();
  let hours = time.getHours().toString();
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = "0" + hours;
  }
  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }
  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }

  let clockString = `${hours}:${minutes}:${seconds}`;
  let colorString = `#${hours}${minutes}${seconds}`;

  clock.textContent = clockString;
  color.textContent = colorString;

  document.body.style.background = colorString;
}

hexOclock();
setInterval(hexOclock, 1000);
