var timer = document.getElementById("timer");
var timeLeft = 5; //setting the timer

var questionsid = document.getElementById("questionsid");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");

var score = 0;
var questionCounter = 0;

//creating an array of objects for each question with matching answers
var questions = [
  {
    question: "What event is not a valid option for addEventListener?",
    choice1: "Click",
    choice2: "Keydown",
    choice3: "Scroll",
    choice4: "Jump",
    answer: 4,
  },
  {
    question: "Which of the following will print the number 8 to the console?",
    choice1: "console.log('8')",
    choice2: "print(8)",
    choice3: "console.log('+eight')",
    choice4: "console.log(8)",
    answer: 4,
  },
  {
    question: "Which of the following is considered a boolean value?",
    choice1: "false",
    choice2: "null",
    choice3: "undefined",
    choice4: "'seven'",
    answer: 1,
  },
  {
    question: "What is the range of numbers that would math.random return?",
    choice1: "0.0 inclusive - 1.0 exclusive",
    choice2: "0.0 exclusive - 1.0 inclusive",
    choice3: "0.0 inclusive - 10.0 inclusive",
    choice4: "0.0 exclusive - 100.0 inclusive",
    answer: 1,
  },
  {
    question: "How would you call the first element in an array?",
    choice1: "array[first]",
    choice2: "array[start]",
    choice3: "array[0]",
    choice4: "array[1]",
    answer: 3,
  },
];

function obtainQuestion() {
  if (questions.length === 0) {
    clearInterval(interval);
    var name = prompt("Type your name for the hiscores");
    var scores = JSON.parse(localStorage.getItem("score")) || [];
    scores.push({ name, score });
    localStorage.setItem("score", JSON.stringify(scores));
    window.location.replace("/hiscore.html");
    return;
  }
  questionCounter++;
  randomQuestion = Math.floor(Math.random() * questions.length); //gets a random number for each number of questions
  questionsid.textContent = questions[randomQuestion].question; //prints each question randomly
  choice1.textContent = questions[randomQuestion].choice1; //prints all of the answer choices
  choice2.textContent = questions[randomQuestion].choice2;
  choice3.textContent = questions[randomQuestion].choice3;
  choice4.textContent = questions[randomQuestion].choice4;
}
function checkAnswer() {
  var userChoice = this.textContent;
  var correctAnswer = questions[randomQuestion].answer;
  console.log(questions[randomQuestion]["choice" + correctAnswer]);
  if (userChoice === questions[randomQuestion]["choice" + correctAnswer]) {
    score += 100;
  } else {
    score -= 50;
  }
  questions.splice(randomQuestion, 1);
  obtainQuestion();
}
choice1.addEventListener("click", checkAnswer);
choice2.addEventListener("click", checkAnswer);
choice3.addEventListener("click", checkAnswer);
choice4.addEventListener("click", checkAnswer);


interval = setInterval(function () {
  if (timeLeft >= 0) {
    timer.textContent = "Time Left: " + timeLeft--;
  }
}, 1000);
