'use strict';

const secretNumber = Math.ceil(Math.random() * 20);
console.log(secretNumber);
let score = 20;

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
