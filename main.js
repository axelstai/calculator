//select all btns and the screen
let num = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".top, .multiply, .deduct, .add, .comma, .equals");
let screen = document.querySelector(".screen");
console.log(operators);

//save clicked values and count clicks
let clicked = [];
let clicks = 0;

//add eventlistener to all numbers and display them on the screen
function displayNumbers(nr) {
    nr.addEventListener("click", function () {
        clicked.push(nr.value);
        screen.innerText += nr.value;
    })
}
num.forEach(function (elem) {
    displayNumbers(elem);
})

//reset everything when pushing "C"
let c = operators[0];
c.addEventListener("click", reset);

function reset() {
    screen.innerText = null;
    clicked = [];
    console.log(clicked);
}










//functions for adding, subtracting, multiplying and dividing 
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {

}




