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

const continueBtn = document.querySelector("#continue")
const startBtn = document.querySelector("#start")
// const exitBtn = document.querySelector("#exit")

continueBtn.addEventListener("click",
function () {
    window.location.replace("quiz.html")
});

startBtn.addEventListener("click", 
function () {
    document.querySelector(".info-box").classList.remove("hidden")
}
);

// exitBtn.addEventListener("click",
// function ()
// )

