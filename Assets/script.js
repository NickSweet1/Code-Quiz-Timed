var startButton = document.getElementById("startButton")
var timer = document.getElementById("timer")
var timeLeft = 75;

var questions = [{
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
]

startButton.addEventListener("click", function() {
    if (timeLeft > 0) {
        setInterval(function () {
            timer.textContent = "Time Left: " + timeLeft--;
        }, 1000);
    }
})

