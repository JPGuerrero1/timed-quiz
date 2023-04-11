var quizArea = document.getElementById("quiz")
var start = document.getElementById("startQuiz")

var timeCount = 60

var questions = [ 
    {
        question:"1st question",
        answerchoice: ["1st answer choice","2nd", "3rd","4","5"],
        correctAnswer: "correct answer",

        question:"1st question",
        answerchoice: ["1st answer choice","2nd", "3rd","4","5"],
        correctAnswer: "correct answer",

        question:"1st question",
        answerchoice: ["1st answer choice","2nd", "3rd","4","5"],
        correctAnswer: "correct answer",

        question:"1st question",
        answerchoice: ["1st answer choice","2nd", "3rd","4","5"],
        correctAnswer: "correct answer",

        question:"1st question",
        answerchoice: ["1st answer choice","2nd", "3rd","4","5"],
        correctAnswer: "correct answer",

        question:"1st question",
        answerchoice: ["1st answer choice","2nd", "3rd","4","5"],
        correctAnswer: "correct answer",
    
    }
]

var currentQuestion = 0;

function startgame(event) {
    event.preventDefault();
    // start the quiz
    // start timer
    //1. create a question, diff function
    generateQuestion()
    //2. create answers
for (var i=0; i<5; i++) {

}
    //3. add answer event listeners
    // will validate if answer choice is right
    //4. move on to next question
}

function generateQuestion() {
    var questions = questions[currentQuestion].question;
    //create an element(p,div)
    //write into element using textContent
    //append the question to the element in our quiz are (appendchild)

    //add event listener to move to next question
    generateAnswerChoice()
}

function generateAnswerChoice() {
    //for loop for all answer choices questions[currentQuestion].answerChoices.length
    //create an element(button)
    //write into element using out anser choice variable textContent
    //add event listener to all btn.addEventListener('click", validateAnswer)
    //append the question to the element in our quiz are (appendchild)
}

function validateAnswer(event) {
    event.preventDefault();
    //grab text of button clicked (event.target.textContent)
    //add condition statement to test userChoice === correctAnswer
    // if true, run correct answer code, add css change or interaction to show its correct
    //if false, add the opposite (decrease timer by 10)
    //check if youve reached end of questions array, condition, if(currentQuestion === questions.length)
    //end the game (call endgame)

    //move onto next question
    // currentQuestion++

    //reset quiz area (quizArea.innerhtml = '', loop using .removeChild()?)
    generateQuestion();
}

function startTimer() {
    timer = setInterval(function() {
        timerDisplay.textContent = timeCounttimeCount--;
    },1000)
    
}

function endGame() {
    //end game whether it reaches the end of the quiz or if time runs out
    //display none quiz area and display end game div
    //score
    var score=timeCount;
    //display score

}

function saveScore(event) {
    event.preventDefault();
    var scoreObj = {
        initials:event.target.child,
        score:timeCount,
    }
    //sets the score into local storage
    localStorage.setItem('score',JSON.stringify(scoreObj));
}


function getScore() {
    //get high schore out of local
}



startQuiz.addEventListener('click', startgame);
scoreForm.addEventListener('submit', saveScore);
