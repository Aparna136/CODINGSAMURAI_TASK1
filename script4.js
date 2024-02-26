
let display = document.getElementById('display');
let currentNumber = '';
let operator = '';
let result = 0;

function appendNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
}

function appendOperator(op) {
    operator = op;
    currentNumber += operator;
    display.value = currentNumber;
}

function clearDisplay() {
    currentNumber = '';
    operator = '';
    display.value = '';
}

function calculate() {
    result = eval(currentNumber);
    display.value = result;
    currentNumber = result.toString();
}
