container = document.getElementById("container");
let squareDiv = `<div class="test" id="test"></div>`
let html = '';

function drawSquare() {
    let htmlSegment = squareDiv;
    html += htmlSegment;
}

function drawGrid() {
    for (var i = 0; i < 255; i++) {
        drawSquare()
    }
    container.innerHTML = `<div class="grid">` + html + `</div>`
}

container.addEventListener("load", drawGrid());

const elementsArray = document.querySelectorAll("#test");


function colorChange() {
    elementsArray.style.backgroundColor = "blue";
}

elementsArray.forEach(function (elem) {
    elem.addEventListener("mouseover", function () {
        elem.style.backgroundColor = "blue"
    });
});

const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function () {
    elementsArray.style.backgroundColor = "red";
})