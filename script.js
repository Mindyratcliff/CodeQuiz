//Grab a reference to the body of the document

var body = document.body;


//Keep score 

var userScore = 0;

//Keep time

var timeEl = document.querySelector(".time");
var secondsLeft = 60;

function setTime() {
    var timeInterval = setInterval( function() {
        secondsLeft --;
        timeEl.textContent = "Time left: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timeInterval);
            
        }
    }
, 1000);}



//Create the Welcome page of the quiz





//Make a start button to begin the quiz

var generateBtn = document.querySelector("#Start");

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
