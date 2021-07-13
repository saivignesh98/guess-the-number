'use strict';

const generateSecretNumber = () => {
  return Math.ceil(Math.random() * 20);
};

let secretNumber = generateSecretNumber();
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 0) {
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No number entered!';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct number!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = '🔼 Too high!';
      score--;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = '🔽 Too low!';
      score--;
    }
  } else {
    document.querySelector('.message').textContent = '💀 You lost!';
  }
  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = generateSecretNumber();
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
