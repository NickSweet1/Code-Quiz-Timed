interval = setInterval(function () {
  if (timeLeft > 0) {
    timer.textContent = "Time Left: " + timeLeft--;
  } else {
    clearInterval(interval);
    timer.textContent = "Out of Time!";
    var name = prompt("Type your name for the hiscores");
    var scores = JSON.parse(localStorage.getItem("score")) || [];
    scores.push({ name, score });
    localStorage.setItem("score", JSON.stringify(scores));
    window.location.replace(localURL);
    return;
  }
}, 1000);