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

//need a function to end the timer and bring users to the score
// ^ need to use clearInterval method somehow

// doesn't conncect to the contintue button
continueBtn.addEventListener("click", startTimer);
// need to subtract time from the clock for wrong answers

// quiz questions
// timer only works when they're commented out

/* need function for next question button
need to keep track of scores
users need to put in initals */
