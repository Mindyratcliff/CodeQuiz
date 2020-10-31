//Grab a reference to the body of the document

var body = document.body;
var quizBody = document.getElementById("quizBody");
var startQuiz = document.querySelector("#start");
var welcomeText = document.createElement("p");
var timeDisplay = document.getElementById("time");
var questions = document.querySelectorAll(".form-check")


//Keep score 

var userScore = 0;

//Keep time


var secondsLeft = 60;

function setTime() {
    var timeInterval = setInterval( function() {
        secondsLeft --;
        timeDisplay.textContent = "Time left: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
            alert("Time is up!");
        }
    }
, 1000);}


//Create the Welcome page of the quiz

welcomeText.innerHTML = "Click the start button to begin the quiz! Answer all questions before time is up!";

quizBody.appendChild(welcomeText);




//Make a start button to begin the quiz

startQuiz.addEventListener('click', quizRunning);

function quizRunning () {

    quizBody.removeChild(welcomeText);
    
    setTime();
}

//Time decreases when a question is answered incorrectly

//Question 1

//Question 2

//Question 3

//Question 4

//Question 5

//End Quiz

//Save initials

//Input for initials with submit button

//Display high score with initials
