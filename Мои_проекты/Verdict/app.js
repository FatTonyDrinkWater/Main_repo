const yearNow = document.querySelector(`.year-now`);
const yearOfDeath = document.querySelector(`.year-of-death`);
const yearsLeftToLive = document.querySelector(`.years-left`);
const timeNow = document.querySelector(`.time-now`);

let now = new Date(); // Right now
let actualYear = now.getFullYear();

const birthYear = 1993;
const averageLiveSpanInRU = 73;
const deathYear = birthYear + averageLiveSpanInRU;
const yearsLeft = deathYear - actualYear;

// Получить настоящее время. Отрендерить его.
// Обращение к Дейт каждую секунду, потому и работает
const clock = () => {
  let now = new Date();
  timeNow.innerText = `Настоящее время${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
};

const render = () => {
  yearNow.innerText = `Сейчас: ${actualYear} год`;
  yearOfDeath.innerText = `Год смерти: ${deathYear}`;
  yearsLeftToLive.innerText = `Осталось жить: ${yearsLeft} лет`;
};
render();
clock();
setInterval(clock, 1000);