//Grab a reference to the body of the document

var body = document.body;
var quizBody = document.getElementById("quizBody");
var startQuiz = document.querySelector("#start");
var welcomeText = document.createElement("p");
var timeDisplay = document.getElementById("time");
var nameInput = document.createElement("input");


//Questions for the quiz

var questionBank = {
    question1 : "Where is a CSS file attached in an HTML document?",
    question2 : "Which is an example of camel case?",
    question3 : "What is an array?",
    question4 : "What does 'i' in a for loop do?",
    question5 : "What are the four elements of the box model?"
}

var answerBank = {
    answerSet1 : ["In the footer", "In the body", "In the head", "Anywhere in the HTML"],
    answerSet2 : ["CAMELCASE", "camelcase", "cAmElCaSe", "camelCase" ],
    answerSet3 : ["The light that shines from your webcam", "An unordered list", "A collection of values in JavaScript", "The return value of a confirm"],
    answerSet4 : ["A counter in the for loop that counts the number of passes", "An alert", "A 3D element", "A return value"],
    answerSet5 : ["Key, value, storage, local", "Margin, pudding, taco, element", "Paragraph, background, body, head", "Content, padding, border, margin"]
}

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


function displayQuestions (i) {
   var questions = document.createElement("h3");
   questions.textContent = questionBank[i];
   quizBody.appendChild(questions);
}

function displayAnswers (i) {
    var answers = document.createElement("h3");
    answers.textContent = answerBank[i];
    quizBody.appendChild(answers);
}


//Question 1
displayQuestions(0);

//Question 2

//Question 3

//Question 4

//Question 5

//End Quiz

//Save initials

//Input for initials with submit button

nameInput.setAttribute("type", "text");



//Display high score with initials
