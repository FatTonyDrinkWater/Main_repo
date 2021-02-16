"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const loseMessage = "You lost the game!";
console.log(secretNumber);

const dislpayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//CHECK BUTTON EL
document.querySelector(".check").addEventListener("click", function () {
  const guess = +document.querySelector(".guess").value;
  console.log(guess);

  // 0 = falsy = false => ! => true . if We want something
  // Invalid input
  if (!guess) {
    dislpayMessage("No number!");

    // Player WINS --------------------------------
  } else if (guess === secretNumber) {
    dislpayMessage("Correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // Guess is too high or to low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      dislpayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      dislpayMessage("You lost the game!");
      document.querySelector(".score").textContent = score;
    }
  }
});

// EL Play again
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log("Again SN:" + secretNumber);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
  score = 20;
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing again...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
