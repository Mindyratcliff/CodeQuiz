//Grab a references to elements in the DOM

var body = document.body;
var quizBody = document.getElementById("quizBody");
var questionBody = document.getElementById("questionBody");
var startQuiz = document.querySelector("#start");
var welcomeText = document.createElement("p");
var timeDisplay = document.getElementById("time");
var nameInput = document.createElement("input");
var buttonEl1 = document.getElementById("button1");
var buttonEl2 = document.getElementById("button2");
var buttonEl3 = document.getElementById("button3");
var buttonEl4 = document.getElementById("button4");
var currentQuestion = 1;

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
  answerSet1: {
    "In the footer": 0,
    "In the body": 0,
    "In the head": 1,
    "Anywhere in the HTML": 0,
  },
  answerSet2: {
    CAMELCASE: 0,
    camelcase: 0,
    cAmElCaSe: 0,
    camelCase: 1,
  },
  answerSet3: {
    "The light that shines from your webcam": 0,
    "An unordered list": 0,
    "A collection of values in JavaScript": 1,
    "The return value of a confirm": 0,
  },
  answerSet4: {
    "A counter in the for loop that counts the number of passes": 1,
    "An alert": 0,
    "A 3D element": 0,
    "A return value": 0,
  },
  answerSet5: {
    "Key, value, storage, local": 0,
    "Margin, pudding, taco, element": 0,
    "Paragraph, background, body, head": 0,
    "Content, padding, border, margin": 1,
  },
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
  currentQuestion++;
}

startQuiz.addEventListener("click", quizRunning);

//Function to generate answers

function displayAnswers(possibleAnswers) {
  //Extract answers for use in function
  var answerKeys = Object.keys(answerBank[possibleAnswers]);

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

function nextQuestion(clickEvent) {
  userScore = userScore + (answerBank["answerSet" + currentQuestion][clickEvent.target.textContent]);
  localStorage.setItem("User Score", userScore);
  //Display the next question and answer set
    displayQuestions("question" + currentQuestion);
    displayAnswers("answerSet" + currentQuestion);
    currentQuestion++;
   if (currentQuestion === 5){
    //Collect and display user initials and high score
    var userInput = document.createElement("p");
    userInput.setAttribute("class", "result");
    nameInput.setAttribute("type", "text");
    nameInput.textContent = "Enter your initials";
    quizBody.appendChild(nameInput);
    nameInput.addEventListener("input", e)

    //Generate a submit button to store user data 
    var submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.textContent = "Submit";
    quizBody.appendChild(submit);
    submit.addEventListener("click", e);
    function e() {
      userInput.textContent = e.data
      localStorage.setItem("User Name", e.data);
    }
    
    
  }
}


//Display high score with initials
