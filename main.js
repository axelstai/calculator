//select all btns and the screen
let num = document.querySelectorAll(".numbers");
let operatorBtn = document.querySelectorAll(".top, .multiply, .deduct, .add, .comma, .equals");
let screen = document.querySelector(".screen");
console.log(operatorBtn);

//store current nr typed(clicked), all numbers in the expression(numbers) and operators.
let clicked = [];
let numbers = [];
let operators = [];

const validNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const validOperators = ["+", "-", "/", "x"]

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



//type by pressing keys
document.addEventListener("keydown", getValue)

function getValue(e) {
    if (validNumbers.includes(e.key)) {
        clicked.push(e.key);
        screen.innerText += e.key;


    }
    else if (validOperators.includes(e.key)) {
        operators.push(e.key);
        screen.innerText += e.key;
        formatNumbers();

    }
    else if (e.key == "Enter") {
        formatNumbers();
        getResult();

    }
}


//reset everything when pushing "C"
let c = operatorBtn[0];
c.addEventListener("click", reset);

function reset() {
    screen.innerText = null;
    clicked = [];
    numbers = [];
    operators = [];
}


//get result when clicking "="
let equals = operatorBtn[8];
equals.addEventListener("click", formatNumbers);
equals.addEventListener("click", getResult);


function getResult() {
    while (numbers.length > 1) {

        if (operators.includes("x")) {
            let i = operators.indexOf("x")
            let product = operate(numbers[i], operators[i], numbers[i + 1]);
            numbers.splice(i, 2, product);
            operators.splice(i, 1)

        }
        if (operators.includes("/")) {
            let i = operators.indexOf("/");
            let product = operate(numbers[i], operators[i], numbers[i + 1]);
            if (numbers[i] && numbers[i + 1] != 0) {
                numbers.splice(i, 2, product);
                operators.splice(i, 1)

            } else {
                screen.innerText = "infinite"
                numbers = [];
                setTimeout(reset, 2000);
            }
        }
        else if (operators.includes("+")) {
            let i = operators.indexOf("+")
            let product = operate(numbers[i], operators[i], numbers[i + 1]);
            numbers.splice(i, 2, product);
            operators.splice(i, 1)

        }
        else if (operators.includes("-")) {
            let i = operators.indexOf("-")
            let product = operate(numbers[i], operators[i], numbers[i + 1]);
            numbers.splice(i, 2, product);
            operators.splice(i, 1)

        }
    }
    if (typeof numbers[0] == "number") {
        screen.innerText = Math.round(numbers * 100) / 100;

    }

}


//formates clicked numbers to int and stores the int in an array(numbers)
function formatNumbers() {
    //remove last operator if there are too many operators
    if (operators.length < numbers.length) {
        operators.pop()
    }
    //checks if any numbers are clicked:
    else if (clicked.length > 0) {
        clicked = Number(clicked.join(""));
        numbers.push(clicked);
        clicked = [];
    }
}

// Functions for different operators:

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

//comma
let comma = operatorBtn[7];
comma.addEventListener("click", function () {
    clicked.push(comma.value);
    screen.innerText += comma.value;

})

//%
let pros = operatorBtn[2];
pros.addEventListener("click", function () {
    if (numbers.length == 1) {
        numbers = [numbers / 100];
        screen.innerText = numbers;
        console.log(numbers);
    } else if (clicked.length != 0) {
        formatNumbers();
        numbers = [numbers / 100];
        screen.innerText = numbers;
        console.log(numbers);
    }

})




//function for operations 
function operate(a, op, b) {
    if (op == "+") {
        return a + b;
    }
    else if (op == "x") {
        return a * b;
    }
    else if (op == "/") {
        return a / b;
    }
    else if (op == "-") {
        return a - b;
    }
}






