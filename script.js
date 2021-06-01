'use strict';
let num = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    //Zero is false value so !guess is true
    displayMessage('❌ No Number!');
  } else if (guess === num) {
    displayMessage('🎉 Correct Number!');
    displayNumber(num);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== num) {
    if (score > 1) {
      displayMessage(guess > num ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🛑 You lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  num = Math.trunc(Math.random() * 20) + 1;
  displayNumber('?');
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
