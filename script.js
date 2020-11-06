//Grab a references to elements in the DOM

var body = document.body;
var quizBody = document.getElementById("quizBody");
var questionBody = document.getElementById("questionBody");
var scoreEl = document.getElementById("score");
var startQuiz = document.querySelector("#start");
var welcomeText = document.createElement("p");
var timeDisplay = document.getElementById("time");
var nameInput = document.createElement("input");
var buttonEl1 = document.getElementById("button1");
var buttonEl2 = document.getElementById("button2");
var buttonEl3 = document.getElementById("button3");
var buttonEl4 = document.getElementById("button4");
var userInput = document.createElement("p");
userInput.setAttribute("class", "result");
nameInput.setAttribute("type", "text");
nameInput.textContent = "Enter your initials";
var submit = document.createElement("button");
submit.setAttribute("type", "submit");
submit.textContent = "Submit";
var currentQuestion = 1;
var answerArray = [];

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
function quizRunning(clickedEvent) {
  quizBody.removeChild(welcomeText);
  setTime();
  clickedEvent.target.textContent;
  displayQuestions("question1");
  displayAnswers("answerSet1");
  currentQuestion++;
}

startQuiz.addEventListener("click", quizRunning);

//Function to generate answers

function displayAnswers(possibleAnswers) {
  //Extract keys for use in the function
  var answerKeys = answerBank[possibleAnswers];

  //Pull answers from object list
  buttonEl1.textContent = answerKeys[0];
  buttonEl2.textContent = answerKeys[1];
  buttonEl3.textContent = answerKeys[2];
  buttonEl4.textContent = answerKeys[3];

  //Add event listeners to each of the buttons

  buttonEl1.addEventListener("click", nextQuestion);
  buttonEl2.addEventListener("click", nextQuestion);
  buttonEl3.addEventListener("click", nextQuestion);
  buttonEl4.addEventListener("click", nextQuestion);
}

var buttons = document.querySelectorAll(".question");
var buttonsCount = buttons.length;
for (var i = 0; i < buttonsCount; i += 1) {
  buttons[i].onclick = function () {
    answerArray.push(this.id);
  };
}

//Keep score
function scoreKeeper() {
  //If the user answers the right answer, user is awared 1 point.
  if (answerArray[0] === "button3") {
    userScore++;
  }
  if (answerArray[1] === "button4") {
    userScore++;
  }
  if (answerArray[2] === "button3") {
    userScore++;
  }
  if (answerArray[3] === "button1") {
    userScore++;
  }
  if (answerArray[4] === "button4") {
    userScore++;
  }
  localStorage.setItem("User Score", userScore);
  scoreEl.textContent = "Score is " + userScore;
}

function loseTime (){
  if (answerArray[0] !== "button3") {
    secondsLeft--;
  }
  if (answerArray[1] !== "button4") {
    secondsLeft--;
  }
  if (answerArray[2] !== "button3") {
    secondsLeft--;
  }
  if (answerArray[3] !== "button1") {
    secondsLeft--;
  }
  if (answerArray[4] !== "button4") {
    secondsLeft--;
  }
}

function nextQuestion() {
  //Check for incorrect answers and remove time
  loseTime();
  //Display the next question and answer set
  displayQuestions("question" + currentQuestion);
  displayAnswers("answerSet" + currentQuestion);
  currentQuestion++;
  if (currentQuestion === 6) {
    //Collect and display user initials and high score

    quizBody.appendChild(nameInput);
    nameInput.addEventListener("input", nameWriter);

    //Generate a submit button to store user data

    quizBody.appendChild(submit);
    submit.addEventListener("click", scoreKeeper);
    
    function nameWriter () {
      var nameDetails = document.getElementById("nameDetails");
      nameDetails.textContent =  nameInput.value;
      localStorage.setItem("User Name", nameInput.value);
      

      
      
    }
  }
}


//Display high score with initials
