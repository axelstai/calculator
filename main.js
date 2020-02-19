//select all btns and the screen
let btns = document.querySelectorAll(".buttons");
let screen = document.querySelector(".screen");

//save clicked values and count clicks
let clicked = [];
let clicks = 0;

//add eventlistener to all buttons
btns.forEach(function (elem) {
    elem.addEventListener("click", function () {
        console.log(elem);
        clicked.push(elem.value);
        console.log(clicked);
    })
})





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




