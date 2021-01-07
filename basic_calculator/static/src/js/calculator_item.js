odoo.define('basic_calculator.calculator_item', function(require){
'use strict';

var Widget = require('web.Widget');
var SystrayMenu = require('web.SystrayMenu');
var Calculator = require('basic_calculator.Calculator');

var CalculatorItem = Widget.extend({
    template: 'basic_calculator.calculator',
    events: {
        'click': 'on_click',
        'click .calc_value': '_insertValue',
        'click .calc_operator': '_insertOperator',
        'click .calc_control': '_insertControlValue',
        "keydown": "_onKeydown",
    },

    init: function (parent, data, options) {
        this.calculator = new Calculator();
    },

    on_click: function (event) {
//        console.log("On Click!!", $(event.target));
        if ($(event.target).is('i') === false && $(event.target).is('a') === false) {
            event.stopPropagation();
        }
    },

    _onKeydown: function(event) {
        console.log('Key Down', event, event.keyCode);
    },

    _insertValue: function(event) {
        console.log('Insert Value', event, event.target);
        this.calculator.insertValue(event.target.value);
    },

    _insertOperator: function(event) {
        console.log('Insert Value', event, event.target);
        this.calculator.insertOperator(event.target.value);
    },

    _insertControlValue: function(event) {
        let processId = event.target.id;
        switch (processId) {
            case 'sign':
                this.calculator.changeSign();
                break;
            case 'clear':
                this.calculator.clearNumber();
                break;
            case 'clear_all':
                this.calculator.reset();
                break;
            case 'delete':
                this.calculator.deleteLastValue();
                break;
            case 'equals':
                this.calculator.calculate();
                break;
            default:
                // Do nothing
                return
         }
    },
});

SystrayMenu.Items.push(CalculatorItem);

return CalculatorItem;
})