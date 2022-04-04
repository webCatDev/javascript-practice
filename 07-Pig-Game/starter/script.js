'use strict';

// Selecting elements
const select = selector => document.querySelector(selector);

let currentScore, currentPlayer, isPlaying, scores;

// event listeners

select('.btn--hold').addEventListener('click', holdScore);

select('.btn--roll').addEventListener('click', rollDice);

select('.btn--new').addEventListener('click', initGame);


// reset functionality

function initGame() {
  currentPlayer = 0;
  currentScore = 0;
  scores = [0, 0];
  currentPlayer = 0;
  select('#score--0').textContent = scores[0];
  select('#score--1').textContent = scores[1];
  select(`#current--0`).textContent = currentScore;
  select(`#current--1`).textContent = currentScore;
  select('.player--0').classList.add('player--active');
  select('.player--1').classList.remove('player--active');
  select('.player--0').classList.remove('player--winner');
  select('.player--1').classList.remove('player--winner');
  select('.dice').classList.add('hidden');
  isPlaying = true;
}

// start game
initGame()

// function for setting current player and its style

function setCurrentPlayer() {
  currentPlayer = currentPlayer === 0 ? 1 : 0;

  if (currentPlayer === 0) {
    select('.player--0').classList.add('player--active');
    select('.player--1').classList.remove('player--active');
  }

  if (currentPlayer === 1) {
    select('.player--0').classList.remove('player--active');
    select('.player--1').classList.add('player--active');
  }
}

// Rolling dice functionality
function rollDice() {
  if (!isPlaying) return;

  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  select('.dice').classList.remove('hidden');
  select('.dice').src = `dice-${dice}.png`;

  // 3. Check for player if rolled 1, switch to next player
  if (dice !== 1) {
    currentScore += dice;

    select(`#current--${currentPlayer}`).textContent = currentScore;
  }

  if (dice === 1) {
    currentScore = 0;

    select(`#current--${currentPlayer}`).textContent = currentScore;
    setCurrentPlayer();
  }
}

// hold functionality

function holdScore() {
  if (!isPlaying) return;

  scores[currentPlayer] += currentScore;

  currentScore = 0;
  select(`#current--${currentPlayer}`).textContent = currentScore;
  select(`#score--${currentPlayer}`).textContent = scores[currentPlayer];

  if (scores[currentPlayer] >= 100) {
    select(`.player--${currentPlayer}`).classList.add('player--winner');
    select('.dice').classList.add('hidden');
    isPlaying = false;
  } else {
    setCurrentPlayer();
  }
}

