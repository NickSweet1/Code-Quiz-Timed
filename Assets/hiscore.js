var scores = JSON.parse(localStorage.getItem("score")) || [];
for (i = 0; i < scores.length; i++) {
    var li = document.createElement("li");
    li.innerText = scores[i].name + " " + scores[i].score;
    document.getElementById("list").appendChild(li);
}