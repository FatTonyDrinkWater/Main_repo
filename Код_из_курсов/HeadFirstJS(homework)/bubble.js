let scores = [60, 80, 100, 20, 34, 56, 23, 12, 45, 12, 20, 22, 150, 200, 102];
let bestSolutions = [];
let message;
let highScore = 0;
function printGetHighscore() {
  for (let i = 0; i < scores.length; i++) {
    message = `Образец № ${i} содержит: ${scores[i]}`;
    console.log(message);
    if (scores[i] > highScore) {
      highScore = scores[i];
    }
}
console.log(`Всего образцов: ${scores.length}`);
console.log(`Самый большой результат: ${highScore}`);
}
function getBestRes() {
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
      bestSolutions.push(i);
      console.log(`Самые лучшие образцы: ${bestSolutions}`);
    }
  }
}

