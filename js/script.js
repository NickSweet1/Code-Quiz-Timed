var timer = document.getElementById("timer");
var timeLeft = 75; //setting the timer
var scoreCount = document.getElementById("scoreCount");
var record = document.getElementById("record");
var questionsid = document.getElementById("questionsid");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var scores = JSON.parse(localStorage.getItem("score")) || [];//sets local storage array to a variable
var score = 0;
var questionCounter = 0;

//the following vars are only for use in line 69 to clearly decribe the pathing
var localURL = "/hiscore.html"; 
var deployedURL = "/Code-Quiz-Timed/hiscore.html";


//creating an array of objects for each question with matching answers
var questions = [
  {
    question: "What event is not a valid option for addEventListener?",
    choice1: "A) Click",
    choice2: "B) Keydown",
    choice3: "C) Scroll",
    choice4: "D) Jump",
    answer: 4,
  },
  {
    question: "Which of the following will print the number 8 to the console?",
    choice1: "A) console.log('8')",
    choice2: "B) print(8)",
    choice3: "C) console.log('+eight')",
    choice4: "D) console.log(8)",
    answer: 4,
  },
  {
    question: "Which of the following is considered a boolean value?",
    choice1: "A) false",
    choice2: "B) null",
    choice3: "C) undefined",
    choice4: "D) 'seven'",
    answer: 1,
  },
  {
    question: "What is the range of numbers that would math.random return?",
    choice1: "A) 0.0 inclusive - 1.0 exclusive",
    choice2: "B) 0.0 exclusive - 1.0 inclusive",
    choice3: "C) 0.0 inclusive - 10.0 inclusive",
    choice4: "D) 0.0 exclusive - 100.0 inclusive",
    answer: 1,
  },
  {
    question: "How would you call the first element in an array?",
    choice1: "A) array[first]",
    choice2: "B) array[start]",
    choice3: "C) array[0]",
    choice4: "D) array[1]",
    answer: 3,
  },
];

function obtainQuestion() {
  if (questions.length === 0) {
    clearInterval(interval);
    var name = prompt("Type your name for the hiscores"); //prompts user for their name to display on the highscore page
    var scores = JSON.parse(localStorage.getItem("score")) || []; //gets the scores and names from local storage or an empty array
    scores.push({ name, score }); //adds the scores to the array
    localStorage.setItem("score", JSON.stringify(scores)); 
    window.location.replace(localURL); //opens new page after quiz is over
    return;
  }
  questionCounter++;
  randomQuestion = Math.floor(Math.random() * questions.length); //gets a random number for each number of questions
  questionsid.textContent = questions[randomQuestion].question; //prints each question randomly
  choice1.textContent = questions[randomQuestion].choice1; //prints all of the answer choices
  choice2.textContent = questions[randomQuestion].choice2;
  choice3.textContent = questions[randomQuestion].choice3;
  choice4.textContent = questions[randomQuestion].choice4;

  choice1.addEventListener("click", checkAnswer);
  choice2.addEventListener("click", checkAnswer);
  choice3.addEventListener("click", checkAnswer);
  choice4.addEventListener("click", checkAnswer);
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
  scores.sort((a,b) => {
    return b.score - a.score;
  });

  scoreCount.textContent = "Your Score: " + score; //prints the users current score as they are taking the quiz
  questions.splice(randomQuestion, 1); //splices out the question that has been answered
  obtainQuestion(); //restart
}
if (scores.length > 0) {
  record.textContent = "Highscore: " + scores[0].score + " points." //prints the highest score to beat
} else {
  record.textContent = "Highscore: No submissions yet"; //offsets the empty array with information saying that nobody has taken the quiz yet
};