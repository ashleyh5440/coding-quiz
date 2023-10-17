// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

//timer
const timerEl = document.getElementById("timer")
let secondsLeft = 60
let timeInterval;
timerEl.textContent = secondsLeft

let questionsEl = document.createElement("h2")

function timer () {
    secondsLeft -- 
    timerEl.textContent = secondsLeft
    if(secondsLeft <= 0)
    endQuiz () //ends quiz when seconds reach 0
}

function startQuiz () {
    timeInterval = setInterval (timer, 1000) //counts down every second
}

function endQuiz () {
    clearInterval(timeInterval)
}

startQuiz () //calls/starts function
//still needs to end after user answers all questions and take time away for wrong answers


// quiz questions
const questions = [
    {
    question: "How are variables declared?",
    answers: [
        "href, var, src",
        "if, function, const",
        "var, let, const"
            ],
    correctIndex: 2
    }, 

    {
    question: "What is the differenence between function declarations and function expressions?",
    answers: [
        "Function declarations are global and load before any code is executed; function expressions are local and only load when that line is reached",
        "They are the same",
        "Function declarations are local and only load when that line is reached; function expressions are global and load before any code is executed",
            ],
        correctIndex: 0
    },

    {
    question: "What are the different types of variables?",
    answers: [
        "undefined, string, number, boolean",
        "tag, string, number, stylesheet",
        "boolean, method, number, function"
            ],
    correctIndex: 0
    },

    {
    question: "How do you add a comment in JavaScript?",
    answers: [
        "<!-- --> or //",
        "$$ or @@",
        "// or /* */"
            ],
    correctIndex: 2
    },

    {
    question: "What is the correct format for an array?",
    answers: [
        "var colors = ['black', 'orange', 'green']", 
        "var colors = black orange green",
        "var colors = (black), (orange), (green)"
            ],
    correctIndex: 0
    },

    {
    question: "Where do you link a JavaScript file in an HTML document?",
    answers: [
        "At the top of the body in a <link> tag",
        "At the bottom of the body with <script> tags",
        "In the middle of the body with <a> tags"
            ],
    correctIndex: 1
    },
];

let currentQuestion = 0;
let score = 0

function displayQuestion () { //displays question and choices
    let questionText = document.querySelector("#question") 
    questionText.textContent = questions [currentQuestion].question 
    let choice1Text = document.querySelector("#choice1") 
    choice1Text.textContent = questions [currentQuestion].answers [0]
    let choice2Text = document.querySelector("#choice2") 
    choice2Text.textContent = questions [currentQuestion].answers [1]
    let choice3Text = document.querySelector("#choice3") 
    choice3Text.textContent = questions [currentQuestion].answers [2]
}

displayQuestion()

let nextQuestionBtn = document.querySelector("#next-question") //assigns a job to the next question button

//goes to the next question when button is clicked
nextQuestionBtn.addEventListener("click", function(){
    currentQuestion++; //'increases' the question by 1
    displayQuestion ()
}) 

// add event listers for the choices
/* need to keep track of scores
users need to put in initals */

