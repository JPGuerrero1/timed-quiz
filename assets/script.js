var quizArea = document.getElementById("quiz");
var startBtn = document.getElementById("startBtn");
var countdown = document.getElementById("countDown");
var checkmate = document.getElementById('endGame');
var scoreBtn = document.getElementById('score');
var clearInput = document.getElementById('input')

var score = clearInterval(timeLeft);

var questions = [
  {
    question: "What does HTML stand for?",
    answerChoices: ["Hypertext Makeshift Language", "Hypertext Markup Language", "Have To Make Lunch", "He Took My Laptop"],
    correctAnswer: "Hypertext Markup Language"
  },
  {
    question: "What does CSS stand for?",
    answerChoices: ["Cascading Style Sheets", "Created Style Sheets", "Code Sheet Styling", "Cascading Sheet Styling"],
    correctAnswer: "Cascading Style Sheets"
  },
  {
    question: "<h1>,<p>, and <section> are types of what?",
    answerChoices: ["Selectors", "functions", "Variables", "Elements"],
    correctAnswer: "Elements"
  },
  {
    question: "A block of Javascript code that executes a task is known as a...?",
    answerChoices: ["Function", "Anchor", "Margin", "Event"],
    correctAnswer: "Function"
  },
  {
    question: "What is the output of: (5+5) === 10?",
    answerChoices: ["True", "False"],
    correctAnswer: "True"
  }
]

var currentQuestion = 0;
var timeLeft = 60;

function startGame(event) {
  event.preventDefault();
  quizArea.innerHTML = '';
  startTimer();
  generateQuestion();
}

function startTimer() {
  var timeInterval = setInterval(function() {

  if (currentQuestion === questions.length) {
    countdown.textContent = 'Time: ' + timeLeft;
    clearInterval(timeInterval)
  };

  if (timeLeft > 1) {
    countdown.textContent = 'Time: ' + timeLeft + ' seconds';
    timeLeft--;
  } else if (timeLeft === 1) {
      countdown.textContent = 'Time: ' + timeLeft + ' second';
      timeLeft--;
  } else {
    countdown.textContent = 'Time: ';
    clearInterval(timeInterval)
    quizArea.innerHTML = '';
    endGame()
  }
}, 1000)}

function generateQuestion() {
  var question = questions[currentQuestion].question;
  var prompt = document.createElement('h1');
  prompt.textContent = question;
  quizArea.append(prompt);
  generateAnswerChoices();
}

function generateAnswerChoices() {
  answerSlot = document.createElement('div');

  for (var i=0; i<questions[currentQuestion].answerChoices.length; i++) {
    var choices = document.createElement('button');
    choices.textContent=questions[currentQuestion].answerChoices[i];

    answerSlot.append(choices);
    quizArea.append(answerSlot);  
  }
  answerSlot.addEventListener('click', validateAnswer);
}

function validateAnswer(event) {
  event.preventDefault();

  var userChoice = event.target.textContent;
  var correct = questions[currentQuestion].correctAnswer;

  if (userChoice === correct) {
    quizArea.innerHTML = '';
  } else {
    quizArea.innerHTML = '';
    timeLeft = timeLeft - 10;
  }

  currentQuestion++

  if (currentQuestion !== questions.length) {
    generateQuestion();
  } else if (currentQuestion === questions.length) {
    endGame();
  }
}

function endGame() {
  displayText = document.createElement('h2');
  finalScore = document.createElement('p');
  finalScore.textContent = 'Final score: ' + timeLeft;
  displayText.textContent = 'Game Over!';
  displayText.append(finalScore);
  quizArea.append(displayText);
}

function saveScore(event) {
  event.preventDefault();

  var scoreObj = {
    intials: event.target.children[0].value,
    score: timeLeft + 1
  }
  
  localStorage.setItem("score", JSON.stringify(scoreObj));
  clearInput.value = ''
}

function getScore() {
  // get high score out of localstorage
  var topScore = localStorage.getItem("score");

  document.getElementById('showScore').value = topScore

  var showScores = document.createElement('h2');

  showScores.textContent = 'Score: ',topScore.initials, topScore.score + '/60'

  showScores.append(topScore);
  quizArea.append(showScores);

}

startBtn.addEventListener("click", startGame);

scoreBtn.addEventListener("submit", saveScore);

showScore.addEventListener('click', getScore);
