let score = 20;
let highscore = 0;

let secretNumber;
const newSecretNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
};
newSecretNumber();

//Podgląd sekretnego numeru
// document.querySelector('.number').textContent = secretNumber;

const gameOver = function () {
  document.querySelector('.message').textContent = '🥺 You loose!';
  document.querySelector('.number').textContent = secretNumber;

  //   document.querySelector('body').style.backgroundColor = '#000000';
  document.querySelector('body').style.backgroundColor = '#9b5d59';

  document.querySelector('.check').disabled = true;
  document.querySelector('.check').style.backgroundColor = '#444';
  document.querySelector('.check').style.color = '#666';

  document.querySelector('header').style.borderBottom = '7px solid #fe6262';
  document.querySelector('.number').style.backgroundColor = '#fe6262';
  document.querySelector('.number').style.color = '#eee';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').style.padding = '6rem 0rem';
};

const gameWon = function () {
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }

  document.querySelector('.message').textContent = '🎇 You won!';
  document.querySelector('.number').textContent = secretNumber;

  //   document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('body').style.backgroundColor = '#90d879';

  document.querySelector('.check').disabled = true;
  document.querySelector('.check').style.backgroundColor = '#444';
  document.querySelector('.check').style.color = '#666';

  document.querySelector('header').style.borderBottom = '7px solid #00b125';
  document.querySelector('.number').style.backgroundColor = '#00b125';
  document.querySelector('.number').style.color = '#eee';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').style.padding = '6rem 0rem';
};

const wrongGuess = function (msg) {
  document.querySelector('.message').textContent = msg;

  score--;
  document.querySelector('.score').textContent = score;

  if (score === 0) {
    gameOver();
  }
};

const checkGuess = function () {
  const guess = document.querySelector('.guess').value;
  const guessNum = Number(guess);
  //   console.log(guess, typeof guess);

  if (guess === '') {
    wrongGuess('❌ No number!');
  } else if (guessNum < 1 || 20 < guessNum) {
    wrongGuess('❌ Number out of range!');
  } else if (guessNum > secretNumber) {
    wrongGuess('📈 Too high');
  } else if (guessNum < secretNumber) {
    wrongGuess('📉 Too low!');
  } else if (guessNum === secretNumber) {
    gameWon();
  }
};

const restart = function () {
  score = 20;
  document.querySelector('.score').value = score;
  newSecretNumber();

  document.querySelector('header').style.borderBottom = '7px solid #eee';

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.backgroundColor = '#eee';
  document.querySelector('.number').style.color = '#222';

  //   document.querySelector('body').style.backgroundColor = '#000000';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.check').disabled = false;
  document.querySelector('.check').style.backgroundColor = '#eee';
  document.querySelector('.check').style.color = '#222';

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.padding = '3rem 0rem';

  document.querySelector('.guess').value = '';
  document.querySelector('.guess').focus();
};

//Focus on Input after reloading app
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.guess').focus();
});

//CONFIRM using Enter
document.querySelector('.guess').addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && score > 0) {
    console.log('On key down', e);
    checkGuess();
  }
});
document.querySelector('.check').addEventListener('click', checkGuess);
//RESTART using r or R
document.querySelector('.guess').addEventListener('keyup', function (e) {
  if (e.code === 'KeyR') {
    console.log('On key up', e);
    restart();
  }
});
document.querySelector('.again').addEventListener('click', restart);
