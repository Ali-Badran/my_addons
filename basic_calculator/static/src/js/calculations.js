// Calculations
//
var isNewNumber = true;
var isNegativeNumber = false;
var lastInput = ''

function insertValue(value){
    if (!this.isNewNumber){
        var currentValue = document.getElementById("number").value;
        document.getElementById("number").value = currentValue + value;
    }
    else{
        if (value === '.'){
            document.getElementById("number").value = '0' + value;
        }
        else{
            document.getElementById("number").value = value;
        }
        this.isNewNumber = false;
    }
    this.lastInput = 'number'
}

function insertOperator(operator){
    var currentNumber = document.getElementById("number").value;
    var currentOperation = document.getElementById("math_operation").value;
    var newOperation = "";
    if (this.lastInput === '') {
        currentNumber = '0';
    }

    if (operator === '=' || ['+', '-', '*', '/'].includes(currentOperation.substring(currentOperation.length - 1))){
        if (this.lastInput === 'operator'){
            newOperation = `${currentOperation.substring(0, currentOperation.length - 1)}${operator}`;
        }
        else{
            newOperation = `${currentOperation} ${currentNumber} ${operator}`;
        }
    }
    else {
        newOperation = `${currentNumber} ${operator}`;
    }
    document.getElementById("math_operation").value = newOperation;
    this.isNewNumber = true;
    this.lastInput = 'operator'
}

function calculate(){
    var currentOperation = document.getElementById("math_operation").value;
    if (currentOperation === '0' || currentOperation.includes('=')){
        return;
    }
    this.insertOperator('=');
    var newOperation = document.getElementById("math_operation").value;
    result = eval(newOperation.substring(0, newOperation.length - 1));
    document.getElementById("number").value = result;
}

function deleteLastValue(){
    var currentNumber = document.getElementById("number").value;
    var newNumber = currentNumber.substring(0, currentNumber.length - 1);
    document.getElementById("number").value = newNumber;
}

function change_sign(){
    var currentNumber = document.getElementById("number").value;
    var isNegativeNumber = false;
    if (currentNumber.length === 0){
        return;
    }
    if (currentNumber[0] === '-'){
        isNegativeNumber = true;
    }

    var newNumber = '';
    if (!isNegativeNumber){
        newNumber = '-' + currentNumber;
    }
    else{
        newNumber = currentNumber.substring(1, currentNumber.length);
    }
    document.getElementById("number").value = newNumber;
}

function clear_number(){
    document.getElementById("number").value = '';
}

function reset(){
    this.isNewNumber = true;
    this.lastInput = ''
    this.clear_number();
    document.getElementById("math_operation").value = '0';
}

function printMsg(){
    console.log('Okay');
}