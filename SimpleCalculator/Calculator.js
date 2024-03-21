function clickFunction(s) {
    let t = document.getElementById("text");
    t.innerText += s.innerText;
}

function calculate() {
    let t = document.getElementById("text");
    let r = eval(t.innerText);
    t.innerText = r;
}

function clearDisplay() {
    let t = document.getElementById("text");
    t.innerText = '';
}