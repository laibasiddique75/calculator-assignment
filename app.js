let displayValue = '';
let operatorClicked = false;

function inputValue(value) {
     const operators = ['/', '*', '-', '+'];

    
    if (operators.includes(value)) {
        if (operatorClicked) {
            return; 
        }
        operatorClicked = true;
    } else {
        operatorClicked = false; 
    }

    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    operatorClicked = false;
    document.getElementById('display').value =displayValue;
}

function display() {
    
    displayValue = displayValue.slice(0, -1);
    
    document.getElementById('display').value = displayValue;
    
    const operators = ['/', '*', '-', '+'];
    if (operators.includes(displayValue.slice(-1))) {
        operatorClicked = true;
    } else {
        operatorClicked = false;
    }
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
        operatorClicked = false;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }}