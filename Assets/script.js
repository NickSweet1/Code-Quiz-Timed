var startButton = document.getElementById("startButton")
var timer = document.getElementById("timer")
var timeLeft = 75;

var questions = [{
    id: 0,
    question: "What event is not a valid option for addEventListener?",
    answer: ["Click", "Keydown", "Scroll", "Jump"]
},
{
    id: 1,
}
]

startButton.addEventListener("click", function() {
    if (timeLeft > 0) {
        setInterval(function () {
            timer.textContent = "Time Left: " + timeLeft--;
        }, 1000);
    }
})

