let allClues = [];
let score = 0;
let clue = [];
let categoryDisplay = document.querySelector(".category");
let clueDisplay = document.querySelector(".clue-text");
let congratsDisplay = document.querySelector(".congrats");
let gameOverDisplay = document.querySelector(".game-over");
let correctAnswerDisplay = document.querySelector(".correct-answer");
let answerInput = document.getElementById("user-answer");
let scoreDisplay = document.querySelector(".score-count");
let restartBtn = document.getElementById("play-again");
let answerValue = "";
let question = "";
let answer = "";
let category = "";

function fetchingData() {
  fetch("https://jservice.io/api/random?")
    .then((response) => response.json())
    .then((data) => {
      let id = data[0].category_id;

      fetch(`https://jservice.io/api/clues?category=${id}`)
        .then((response) => response.json())
        .then((data) => {
          allClues = data;
          questionGenerator();
        });
    });
}

fetchingData();

let submitAnswer = document
  .getElementById("submit-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("submit-btn");
    return verifyAnswer(answerValue);
  });

function verifyAnswer(answerValue) {
  answerValue = answerInput.value;
  answerInput.value = "";
  if (answerValue.toLowerCase() === answer.toLowerCase()) {
    return correct(), questionGenerator();
  } else {
    return incorrect();
  }
}

function correct() {
  congratsDisplay.innerHTML = "Good Job";
  scoreDisplay.textContent = score += 1;
}

function incorrect() {
  congratsDisplay.innerHTML = "";
  scoreDisplay.textContent = score = 0;
  correctAnswerDisplay.style.display = "block";
  gameOverDisplay.innerHTML = "Game Over";
  gameOverDisplay.style.display = "block";
  restartBtn.style.display = "inline-flex";
  restartBtn.addEventListener("click", function (event) {
    event.preventDefault();
    restartGame();
  });
}

function questionGenerator() {
  let index = Math.floor(Math.random() * allClues.length);
  clue = allClues[index];
  allClues.splice(index, 1);
  question = clue.question;
  answer = clue.answer;
  category = clue.category.title;
  return (
    (clueDisplay.innerHTML = question),
    (correctAnswerDisplay.innerHTML = answer),
    (categoryDisplay.innerHTML = category)
  );
}

function restartGame() {
  window.location.reload();
}
