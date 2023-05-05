var startButton = document.getElementById("startButton")
var timer = document.getElementById("timer")
var timeLeft = 3;

startButton.addEventListener("click", function() {
    if (timeLeft > 0) {
        setInterval(function () {
            timer.textContent = "Time Left: " + timeLeft--;
        }, 1000);
    }
})

