interval = setInterval(function () {
  if (timeLeft > 0) {
    timer.textContent = "Time Left: " + timeLeft--;
  } else {
    clearInterval(interval);
    timer.textContent = "Out of Time!";
    var name = prompt("Type your name for the hiscores"); //prompts user if time runs out
    var scores = JSON.parse(localStorage.getItem("score")) || []; //gets score from local storage if time runs out
    scores.push({ name, score }); //pushes the score to the array
    localStorage.setItem("score", JSON.stringify(scores)); //get score item 
    window.location.replace(deployedURL); //opens new window to highscore page
    return;
  }
}, 1000);

//timer page