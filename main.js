//select all btns and the screen
let num = document.querySelectorAll(".numbers");
let operatorBtn = document.querySelectorAll(".top, .multiply, .deduct, .add, .comma, .equals");
let screen = document.querySelector(".screen");
console.log(operatorBtn);

//store current nr typed(clicked), all numbers in the expression(numbers) and operators.
let clicked = [];
let numbers = [];
let operators = [];
let value = 0;

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
let c = operatorBtn[0];
c.addEventListener("click", reset);

function reset() {
    screen.innerText = null;
    clicked = [];
    numbers = [];
    operators = [];
    value = 0;
}

//make the array with induvidual numbers into actual numbers: [2,4,5] --> 245
let equals = operatorBtn[8];
equals.addEventListener("click", formatNumbers);
equals.addEventListener("click", function () {
    value = (operate(numbers[0], operators[0], numbers[1]))
    if (operators.length > 1) {
        for (i = 1; i < operators.length; i++) {
            let sum = value;
            value = (operate(sum, operators[i], numbers[i + 1]));
            console.log(sum);
        }
    }
    screen.innerText = value;

})


//formates clicked to int and stores the int in an array(numbers)
function formatNumbers() {
    clicked = Number(clicked.join(""));
    numbers.push(clicked);
    clicked = [];
}
//plusse
let plus = operatorBtn[6];
plus.addEventListener("click", formatNumbers)
plus.addEventListener("click", function () {
    operators.push("+");
    screen.innerText += "+";
})





//----------------------------------------\\



//functions for adding, subtracting, multiplying and dividing 
function operate(a, op, b) {
    if (op == "+") {
        return add(a, b);
    }
    else if (op == "x") {

    }
}

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





