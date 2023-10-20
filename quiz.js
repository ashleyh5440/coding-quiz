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


const timerEl = document.getElementById("timer");
let secondsLeft = 60;
let timeInterval;
timerEl.textContent = secondsLeft;

let quizBoxEl = document.getElementById("quizBox");
let endEl = document.getElementById("endScreen")
let choicesEL = document.getElementById("choices");
let scoreEl = document.getElementById("scores");
let finalScoreEl = document.getElementById("finalScore");
let nameEl = document.getElementById("initials");
let saveBtn = document.getElementById("save");
// let highScoresEl = document.getElementById("scores");
let scoresListEl = document.getElementById("scoresList");
let retakeEl = document.getElementById("retake");
let clearScoresEl = document.getElementById("clear");

//timer
function timer () {
    secondsLeft -- 
    timerEl.textContent = secondsLeft
    if(secondsLeft <= 0)
    endQuiz () //ends quiz when seconds reach 0
    // if(userClick === correctAnswer) 
    // score += 1
}

function startQuiz () {
    timeInterval = setInterval (timer, 1000) //counts down every second
}

function endQuiz () {
    clearInterval(timeInterval)
    quizBoxEl.style.display = "none";
    finalScoreEl.textContent = score;
    document.querySelector(".end-container").classList.remove("hidden")
}

startQuiz () //calls/starts function



// quiz questions
const questions = [
    {
    id: 0,
    question: "How are variables declared?",
    answers: [
        "href, var, src",
        "if, function, const",
        "var, let, const"
            ],
    correctIndex: 2
    }, 

    {
    id: 1,
    question: "What is the differenence between function declarations and function expressions?",
    answers: [
        "Function declarations are global and load before any code is executed; function expressions are local and only load when that line is reached",
        "They're the same and this question is dumb",
        "Function declarations are local and only load when that line is reached; function expressions are global and load before any code is executed",
            ],
        correctIndex: 0
    },

    {
    id: 2,
    question: "What are the different types of variables?",
    answers: [
        "undefined, string, number, boolean",
        "tag, string, number, stylesheet",
        "boolean, method, number, function"
            ],
    correctIndex: 0
    },

    {
    id: 3,
    question: "How do you add a comment in JavaScript?",
    answers: [
        "<!-- --> or //",
        "$$ or @@",
        "// or /* */"
            ],
    correctIndex: 2
    },

    {
    id: 4,
    question: "What is the correct format for an array?",
    answers: [
        "var colors = ['black', 'orange', 'green']", 
        "var colors = black orange green",
        "var colors = (black), (orange), (green)"
            ],
    correctIndex: 0
    },

    {
    id: 5,
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
let score = 0;

function displayQuestion () { //displays question and choices
    let questionText = document.querySelector("#question") 
    questionText.textContent = questions [currentQuestion].question 

    let choice1Text = document.querySelector("#choice1") 
    choice1Text.textContent = questions [currentQuestion].answers [0]
    choice1Text.setAttribute("data-correctindex", questions[currentQuestion].correctIndex) //this assigns correctIndex to each button
    choice1Text.classList.remove("correct-answer");

    let choice2Text = document.querySelector("#choice2") 
    choice2Text.textContent = questions[currentQuestion].answers [1]
    choice2Text.setAttribute("data-correctindex", questions[currentQuestion].correctIndex)
    choice2Text.classList.remove("correct-answer");

    let choice3Text = document.querySelector("#choice3") 
    choice3Text.textContent = questions [currentQuestion].answers [2]
    choice3Text.setAttribute("data-correctindex", questions[currentQuestion].correctIndex) 
    choice3Text.classList.remove("correct-answer");
}

displayQuestion()

function displayScores() {
    scoresListEl.textContent = score; // assigned this to scoresList so that it displays within the ul
}

displayScores();

let nextQuestionBtn = document.querySelector("#next-question") //assigns a job to the next question button

//goes to the next question when button is clicked
nextQuestionBtn.addEventListener("click", function(){
    currentQuestion++; //'increases' the question by 1
    displayQuestion ()
}) 

choicesEL.addEventListener("click",
    function(event) { //makes it so that clicking anywhere on the div selects the nearest button
if (event.target.matches("button") === true) { //^ counters the code above and makes the js listen for a button click specifically
     //event.target is what is recieving the event, what's being clicked on
    let userClick = event.target.dataset["number"] //refers to the data-number
    let correctAnswer = event.target.dataset["correctindex"]

    if(userClick === correctAnswer) {
        //changes color 
        event.target.classList.add("correct-answer");
        score += 1; //increases score by 1
    displayScores(); 
    }
    else {
        //subtracts time for wrong answers
        secondsLeft -=5

    }
  }
    } 
)

//end screen

saveBtn.addEventListener("click", 
function () {
    document.querySelector(".scores-container").classList.remove("hidden")
    document.querySelector(".end-container").classList.add("hidden")

    //save user initials 
    const userName = nameEl.value;
    if (userName) {
        const userScoreData = {
            initials: userInitials,
            score: score, // The user's score
        };
        saveUserScore(userScoreData);
    }
}
);


//score screen
//needs to display the high scores saved on the previous screen in the ul element, clear scores button needs to erase all scores

//saves scores
function saveUserScore(userScoreData) {
    const existingScores = JSON.parse(localStorage.getItem("scores")) || [];
    existingScores.push(userScoreData);
    localStorage.setItem("scores", JSON.stringify(existingScores));
}

//displays scores
function displaySavedScores() {
    const savedScores
}

clearScoresEl.addEventListener("click", function () {
    localStorage.removeItem("scores");
    document.getElementById("scoreList");
    scoreList.innerHTML = "";
}
)
