//Grab a references to elements in the DOM

var body = document.body;
var quizBody = document.getElementById("quizBody");
var questionBody = document.getElementById("questionBody");
var startQuiz = document.querySelector("#start");
var welcomeText = document.createElement("p");
var timeDisplay = document.getElementById("time");
var nameInput = document.createElement("input");
var submit = document.querySelector("#submit");
var radioEl1 = document.querySelector("radioAnswer1");
var radioEl2 = document.querySelector("radioAnswer2");
var radioEl3 = document.querySelector("radioAnswer3");
var radioEl4 = document.querySelector("radioAnswer4");

var userScore = 0;

//Questions for the quiz

var questionBank = {
  question1: "Where is a CSS file attached in an HTML document?",
  question2: "Which is an example of camel case?",
  question3: "What is an array?",
  question4: "What does 'i' in a for loop do?",
  question5: "What are the four elements of the box model?",
};

var answerBank = {
  answerSet1: [
    "In the footer",
    "In the body",
    "In the head",
    "Anywhere in the HTML",
  ],
  answerSet2: ["CAMELCASE", "camelcase", "cAmElCaSe", "camelCase"],
  answerSet3: [
    "The light that shines from your webcam",
    "An unordered list",
    "A collection of values in JavaScript",
    "The return value of a confirm",
  ],
  answerSet4: [
    "A counter in the for loop that counts the number of passes",
    "An alert",
    "A 3D element",
    "A return value",
  ],
  answerSet5: [
    "Key, value, storage, local",
    "Margin, pudding, taco, element",
    "Paragraph, background, body, head",
    "Content, padding, border, margin",
  ],
};

//Keep time

var secondsLeft = 60;

function setTime() {
  var timeInterval = setInterval(function () {
    secondsLeft--;
    timeDisplay.textContent = "Time left: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timeInterval);
      alert("Time is up!");
    }
  }, 1000);
}

//Function to generate questions

function displayQuestions(possibleQuestion) {
    var question = document.createElement("h3");
    question.textContent = questionBank[possibleQuestion];
    questionBody.appendChild(question);
  }

//Create the Welcome page of the quiz

welcomeText.innerHTML =
  "Click the start button to begin the quiz! Answer all questions before time is up!";

quizBody.appendChild(welcomeText);

//Make a start button to begin the quiz
function quizRunning() {
    quizBody.removeChild(welcomeText);
    setTime();
    displayQuestions("question1");
    displayAnswers("answerSet1");
  }

startQuiz.addEventListener("click", quizRunning);


//Function to generate answers

function displayAnswers(possibleAnswers) {
  var option1 = document.getElementById("radioLabel1");
  var option2 = document.getElementById("radioLabel2");
  var option3 = document.getElementById("radioLabel3");
  var option4 = document.getElementById("radioLabel4");
  option1.textContent = answerBank[possibleAnswers][0];
  option2.textContent = answerBank[possibleAnswers][1];
  option3.textContent = answerBank[possibleAnswers][2];
  option4.textContent = answerBank[possibleAnswers][3];
  quizBody.appendChild(submit);
}

//Time decreases when a question is answered incorrectly

function nextQuestion (prevQuest, nextQuest) {
    quizBody.classList.remove(prevQuest);
    quizBody.classList.add(nextQuest);
}

function scoreKeeper () {
    if ()
}

//Question 1


submit.addEventListener("click", function);


//Question 2

displayQuestions("question2");

//Question 3

displayQuestions("question3");

//Question 4

displayQuestions("question4");

//Question 5

displayQuestions("question5");

//End Quiz

//Save initials

//Input for initials with submit button

nameInput.setAttribute("type", "text");

//Display high score with initials
