"use strict";

// Selecting all the elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const changePlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Intial Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;
let activePlayer = 0;
const playerScores = [0, 0];

btnRoll.addEventListener("click", function () {
  // Generating a random dice roll
  const dice = Math.ceil(Math.random() * 6);

  // Display the dice
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove("hidden");

  //  else .
  if (dice !== 1) {
    // If dice is not 1 add the score
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    // switch to the next player
    changePlayer();
  }
});

btnHold.addEventListener("click", function () {
  playerScores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    playerScores[activePlayer];

  if (playerScores[activePlayer] >= 20) {
  } else {
    changePlayer();
  }
});
