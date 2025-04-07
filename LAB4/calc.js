const display = document.getElementById('display');
let currentInput = '';
let operator = null;
let firstOperand = null;
let waitingForSecondOperand = false;

function appendNumber(number) {
    if (waitingForSecondOperand) {
        currentInput = number;
        waitingForSecondOperand = false;
    } else {
        // Prevent multiple leading zeros unless it's the only digit
        if (currentInput === '0' && number !== '0') {
            currentInput = number;
        } else if (currentInput === '0' && number === '0') {
            return; // Do nothing if input is already '0' and adding another '0'
        } else {
             currentInput += number;
        }
    }
    updateDisplay();
}

function appendDecimal() {
    if (waitingForSecondOperand) {
        currentInput = '0.';
        waitingForSecondOperand = false;
    } else if (!currentInput.includes('.')) {
        currentInput += '.';
    }
     updateDisplay();
}

function appendOperator(op) {
    if (operator !== null && !waitingForSecondOperand) {
        // Perform calculation if an operator already exists and we have a second operand ready
        calculate();
    }

    firstOperand = parseFloat(currentInput);
    operator = op;
    waitingForSecondOperand = true;
    // Display doesn't need immediate update here, waits for next number
}

function calculate() {
    if (operator === null || waitingForSecondOperand) {
        // Nothing to calculate if no operator or waiting for the second number
        return;
    }

    const secondOperand = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                result = 'Error'; // Handle division by zero
            } else {
                result = firstOperand / secondOperand;
            }
            break;
        default:
            return; // Should not happen
    }

    // Handle potential floating point inaccuracies (optional but good)
    if (typeof result === 'number' && result !== 'Error') {
       result = parseFloat(result.toPrecision(12)); // Limit precision
    }

    currentInput = String(result);
    operator = null;
    firstOperand = null;
    waitingForSecondOperand = false; // Ready for new input or chaining
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

function backspace() {
    if (waitingForSecondOperand) return; // Don't backspace if waiting for second op
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        currentInput = '0'; // Show '0' if input becomes empty
        // Decide if you want to reset completely or just show 0
    }
    updateDisplay();
}


function updateDisplay() {
    display.value = currentInput || '0'; // Show '0' if currentInput is empty
}

// Initial setup
updateDisplay();