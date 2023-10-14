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

// timer
document.getElementById("timer").innerHTML = 05 + ":" + 00; //starts timer at 5 minutes
startTimer();

function startTimer () {
    let presentTime = document.getElementById("timer").innerHTML;
    let timeArray = presentTime.split(/[:]+/);
    let m = timeArray[0];
    let s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}

    document.getElementById("timer").innerHTML = m + ":" + s;
    setTimeout(startTimer, 1000) //makes seconds count down by the second
}

function checkSecond(sec) {
    if (sec < 10 && sec >= 0) { sec = "0" + sec}; //adds 0 to numbers less than 10
    if (sec < 0) {sec = "59";}
    return sec;
}
// doesn't conncect to the contintue button
continueButton.addEventListener("click", startTimer);


// quiz questions
let questions = [
    {
    number: 1,
    question: "How are variables declared?",
    answer: "var, let, const",
    options: [
        "href, var, src",
        "if, function, const",
        "var, let, const"
            ]
    }, 

    {
    number: 2, 
    question: "What is the differenence between function declarations and function expressions?",
    answer: "Function declarations are global and load before any code is executed; function expressions are local and only load when that line is reached"
    options: [
        "They're the same",
        "Function declarations are global and load before any code is executed; function expressions are local and only load when that line is reached",
        "Function declarations are local and only load when that line is reached; function expressions are global and load before any code is executed"
            ]
    },

    {
    number: 3,
    question: "What are the different types of variables?",
    answer: "undefined, string, number, boolean",
    options: [
        "undefined, string, number, boolean",
        "tag, string, number, stylesheet",
        "boolean, method, number, function"
            ]
    },

    {
    number: 4,
    question: "How do you add a comment in JavaScript?"
    answer: "// or /* */"
    options: [
        "<!-- --> or //",
        "$$ or @@",
        "// or /* */"
            ]
    },

    {
    number: 5,
    question: "What is the correct format for an array?",
    answer: "var colors = ['black', 'orange', 'green']", 
    options: [
        "var colors = ['black', 'orange', 'green']", 
        "var colors = black orange green",
        "var colors = (black), (orange), (green)"
            ]
    },

    {
    number: 6,
    question: "Where do you link a JavaScript file in an HTML document?",
    answer: "At the bottom of the body with <script> tags",
    options: [
        "At the top of the body in a <link> tag",
        "At the bottom of the body with <script> tags",
        "In the middle of the body with <a> tags"
            ]
    },

    {
    number: 7,
    question: "How does a for loop start?",
    answer: "for (let i = 0;",
    options: [
        "for (let i = 0;",
        "for let (i = 0;",
        "for let (i) = (0"
    ]
    },

    {
    number: 8,
    question: "How do assign value to a variable?"
    answer: "=",
    options: [
        "+",
        "%",
        "="
    ]
    }
];

    