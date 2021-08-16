let allClues = [];
let score = 0;

let clueDisplay = document.querySelector(".clue-text");
let correctAnswer = document.querySelector(".correct-answer");
let answerInput = document.getElementById("user-answer");
let scoreDisplay = document.querySelector(".score-count")
let answerValue = answerInput.value;
let question = ""
let answer = ""
function fetchingData() {
  fetch(`https://jservice.io/api/random?id=${Math.floor(Math.random())}count=100`)
    .then((response) => response.json())
    .then((clues) => {
     for (let clue of clues){
        allClues.push(clue)
         question = clue.question
         answer = clue.answer
        return clueDisplay.append(question), correctAnswer.append(answer)
        }
      })
    };

fetchingData();
console.log(allClues)

function questionGenerator() {
  
}


function verifyAnswer(answerValue) {
    if(answerValue === answer.toLowerCase()){
        scoreDisplay.textContent(`${score += 1}`);
    } else {
        let gameOver = document.createElement("h2");
        gameOver.append("Game Over")
        document.getElementById("play-again")
        document.addEventListener("click", restartGame())
    }
  // Verify if the answer is correct
  // use an if statement and toLoweCase
  //display congratulatory message if correct && score +=  1 && call clue() again
  //|| display correct answer and set timer, then display button to restart

}

function restartGame(){
    window.location.reload();
}
//How am I gonna use the data fetched?
// let question = document.getElementById("question")
// question.innerHTML = fetchingData.data

// function processResponse (pageResponse){
// let randomQuestion = pageResponse.question
//     console.log(this.question)
// }

// I have fetched the information, what is next? how do I work with the information received?

//function questionGenerator(){
//math.Random
//}

// class Jeopardy {
//     constructor ()

// }
