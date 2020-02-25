//select all btns and the screen
let num = document.querySelectorAll(".numbers");
let operatorBtn = document.querySelectorAll(".top, .multiply, .deduct, .add, .comma, .equals");
let screen = document.querySelector(".screen");
console.log(operatorBtn);

//store current nr typed(clicked), all numbers in the expression(numbers) and operators.
let clicked = [];
let numbers = [];
let operators = [];

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
}


//get result
let equals = operatorBtn[8];
equals.addEventListener("click", formatNumbers);
equals.addEventListener("click", function () {
    while (numbers.length > 1) {
        if (operators.includes("x")) {
            let i = operators.indexOf("x")
            let product = operate(numbers[i], operators[i], numbers[i + 1]);
            numbers.splice(i, 2, product);
            operators.splice(i, 1)
            console.log(numbers);
            console.log(operators)
        }
        if (operators.includes("/")) {
            let i = operators.indexOf("/");
            let product = operate(numbers[i], operators[i], numbers[i + 1]);
            if (numbers[i] && numbers[i + 1] != 0) {
                numbers.splice(i, 2, product);
                operators.splice(i, 1)
                console.log(numbers);
                console.log(operators)
            } else {
                screen.innerText = "Impossible!"
                setTimeout(reset, 2000);
            }
        }
        else if (operators.includes("+")) {
            let i = operators.indexOf("+")
            let product = operate(numbers[i], operators[i], numbers[i + 1]);
            numbers.splice(i, 2, product);
            operators.splice(i, 1)
            console.log(numbers);
            console.log(operators)
        }
        else if (operators.includes("-")) {
            let i = operators.indexOf("-")
            let product = operate(numbers[i], operators[i], numbers[i + 1]);
            numbers.splice(i, 2, product);
            operators.splice(i, 1)
            console.log(numbers);
            console.log(operators)
        }
    }
    screen.innerText = Math.round(numbers * 100) / 100;
})


//formates clicked numbers to int and stores the int in an array(numbers)
function formatNumbers() {
    clicked = Number(clicked.join(""));
    numbers.push(clicked);
    clicked = [];
}
//add
let plus = operatorBtn[6];
plus.addEventListener("click", formatNumbers);
plus.addEventListener("click", function () {
    operators.push("+");
    screen.innerText += "+";
})

//multiply
let mult = operatorBtn[4];
mult.addEventListener("click", formatNumbers);
mult.addEventListener("click", function () {
    operators.push("x");
    screen.innerText += "x";
})

//divide
let divi = operatorBtn[3];
divi.addEventListener("click", formatNumbers);
divi.addEventListener("click", function () {
    operators.push("/");
    screen.innerText += "/";
})

//subtract
let sub = operatorBtn[5];
sub.addEventListener("click", formatNumbers);
sub.addEventListener("click", function () {
    operators.push("-");
    screen.innerText += "-";
})


//----------------------------------------\\



//functions for adding, subtracting, multiplying and dividing 
function operate(a, op, b) {
    if (op == "+") {
        return add(a, b);
    }
    else if (op == "x") {
        return multiply(a, b);
    }
    else if (op == "/") {
        return divide(a, b);
    }
    else if (op == "-") {
        return subtract(a, b)
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





