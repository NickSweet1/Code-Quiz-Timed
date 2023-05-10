var scores = JSON.parse(localStorage.getItem("score")) || []; //assigns the scores from local storage
for (i = 0; i < scores.length; i++) { 
    var li = document.createElement("li");
    //sorts all of the scores from highest to lowest
    scores.sort((a,b) => {
        return b.score - a.score;
    });
    li.innerText = scores[i].name + " " + scores[i].score; //prints the scores from the variable in the for loop onto the page
    document.getElementById("list").appendChild(li); // adds the list
}
