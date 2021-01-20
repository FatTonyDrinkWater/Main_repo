// function startGame() {
//   console.log("Game is starting...");
// }

// Анонимная функция. Без названия, но хранится в переменной. Колл по имени переменной
// const start = function() {
//   console.log("Game is starting...");
// };

const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DRAW = "DRAW";
const PLAYER_WON = "PLAYER WON";
const PC_WON = "COMPUTER WON";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    `${ROCK}`
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid input! We choose ${ROCK} for you!`);
    return;
  }
  return selection;
};

const getComputerChoise = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (pcChoice, playerChoice) => {
  return pcChoice === playerChoice
    ? DRAW
    : (pcChoice === ROCK && playerChoice === PAPER) ||
      (pcChoice === PAPER && playerChoice === SCISSORS) ||
      (pcChoice === SCISSORS && playerChoice === ROCK)
    ? PLAYER_WON
    : PC_WON;

  // if (pcChoice === playerChoice) {
  //   return DRAW;
  // } else if (
  //   (pcChoice === ROCK && playerChoice === PAPER) ||
  //   (pcChoice === PAPER && playerChoice === SCISSORS) ||
  //   (pcChoice === SCISSORS && playerChoice === ROCK)
  // ) {
  //   return PLAYER_WON;
  // } else {
  //   return PC_WON;
  // }
};
// Анонимная Стрелочная функция
startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoise();

  const winner = getWinner(computerSelection, playerSelection);
  let message = `You picked ${playerSelection}, and computer picked ${computerSelection}, therefore you `;
  switch (winner) {
    case DRAW:
      message = message + "had a draw!";
      break;
    case PLAYER_WON:
      message = message + "won!";
      break;
    case PC_WON:
      message = message + "lose!";
      break;
  }
  alert(message);
  gameIsRunning = false;
});
