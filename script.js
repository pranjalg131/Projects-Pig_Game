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

// Intial Conditions
let currentScore, activePlayer, isPlaying, playerScores;

const init = function () {
  currentScore = 0;
  activePlayer = 0;
  playerScores = [0, 0];
  isPlaying = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove("player--active", "player--winner");
  player1El.classList.remove("player--active", "player--winner");
  diceEl.classList.add("hidden");

  // Setting player 0 as the active player.
  player0El.classList.add("player--active");
};

init();

const changePlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (isPlaying) {
    // Generating a random dice roll
    const dice = Math.ceil(Math.random() * 6);

    // Display the dice
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove("hidden");

    if (dice !== 1) {
      // If dice is not 1 add the score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      changePlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (isPlaying) {
    playerScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      playerScores[activePlayer];

    if (playerScores[activePlayer] >= 10) {
      isPlaying = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      current0El.textContent = 0;
      current1El.textContent = 0;
    } else {
      changePlayer();
    }
  }
});

btnNew.addEventListener("click", init);
