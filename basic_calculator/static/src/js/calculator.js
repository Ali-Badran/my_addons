odoo.define('basic_calculator.Calculator', function (require){
"user strict";

var Class = require('web.Class');

var Calculator = Class.extend({
    init: function(){
        this.isNewNumber = true,
        this.isNegativeNumber = false;
        this.lastInput = ''
    },

    insertValue: function(value){
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
    },

    insertOperator: function(operator){
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
        this.lastInput = 'operator';
    },

    calculate: function(){
        var currentOperation = document.getElementById("math_operation").value;
        if (currentOperation === '0' || currentOperation.includes('=')){
            return;
        }
        this.insertOperator('=');
        var newOperation = document.getElementById("math_operation").value;
        result = eval(newOperation.substring(0, newOperation.length - 1));
        document.getElementById("number").value = result;
    },

    changeSign: function(){
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
    },

    clearNumber: function(){
        document.getElementById("number").value = '';
    },

    reset: function(){
        this.isNewNumber = true;
        this.lastInput = ''
        this.clearNumber();
        document.getElementById("math_operation").value = '0';
    },

    deleteLastValue: function(){
        var currentNumber = document.getElementById("number").value;
        var newNumber = currentNumber.substring(0, currentNumber.length - 1);
        document.getElementById("number").value = newNumber;
    },
});

return Calculator;
});