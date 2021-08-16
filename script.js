const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving'
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Start counting down 
const timeInterval = setInterval(updateTime, 1000);

// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
} 

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}
addWordToDOM();

// Update Score 
function updateScore() {
  score++;
  scoreEl.innerText = score;
}

// Update Time
function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  if(time === 0) {
    clearInterval(timeInterval);
    //end game
    gameOver();
  }
}

// Game over, show end screen
function gameOver() {
  endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Play again</button>
  `;

  endgameEl.style.display = "flex";
}

// Check if words matches
function checkMatch(e) {
  const insertText = e.target.value;
  if(insertText === randomWord) {
    addWordToDOM();
    updateScore();
    //Clear input
    e.target.value = '';

    time += 5;

    updateTime();
  }
}


//Event listeners
text.addEventListener('input', checkMatch);
