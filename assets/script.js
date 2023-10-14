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

/* quiz questions:  how are variables declared, types of variables, what logical comparisons, difference between function declaration and expression, how to create a function, how to add a comment, hpw to write an array, how to assign value to a variable*/

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
