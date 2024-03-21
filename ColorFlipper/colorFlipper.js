var colors = ["red", "blue", "yellow", "orange", "green", "black"];

function colorChange() {
    var randomIndex = Math.floor(Math.random() * colors.length);
    var randomColor = colors[randomIndex];
    
    document.getElementById("name").innerText = randomColor;
    document.body.style.backgroundColor = randomColor;
}