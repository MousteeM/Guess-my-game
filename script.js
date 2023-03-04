"use strict";
const secretNum = () => {
  return Math.trunc(Math.random() * 20) + 1;
};
let secretNumber = secretNum();
let score = 20;
let highScore = 0;
// document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when score greater than 1
  if (score > 1) {
    // when there is no guess
    if (!guess) {
      document.querySelector(".message").textContent = "No Number!";

      //   when guess is correct
    } else if (guess === secretNumber) {
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".message").textContent = "That is correct!";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }

      //   when guess is too high
    } else if (guess > secretNumber) {
      score--;
      document.querySelector(".message").textContent = "Too High!";
      document.querySelector(".score").textContent = score;

      //   when guess is too low
    } else if (guess < secretNumber) {
      score--;
      document.querySelector(".message").textContent = "Too Low!";
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".message").textContent = "You lost the game!";
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", () => {
  secretNumber = secretNum();
  score = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
