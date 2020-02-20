//select all btns and the screen
let num = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".top, .multiply, .deduct, .add, .comma, .equals");
let screen = document.querySelector(".screen");
console.log(operators);

//save clicked values and count clicks
let clicked = [];
let clicks = 0;

//add eventlistener to all numbers and display them on the screen
num.forEach(function (elem) {
    elem.addEventListener("click", function () {
        clicked.push(elem.value);
        screen.innerText += elem.value;
    })
})

//






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




