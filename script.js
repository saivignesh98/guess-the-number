'use strict';

const secretNumber = Math.ceil(Math.random() * 20);
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number entered!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '🔼Too high!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '🔽Too low!';
  }
});
