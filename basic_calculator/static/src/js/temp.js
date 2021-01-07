odoo.define('basic.calculator.temp', function(require){
    'use strict';

    var Animal = require('basic_calculator.Animal');
    var Dog = require('basic_calculator.Dog');
//    console.log('Animal', Animal);

    var animal = new Animal();
    var dog = new Dog();

    console.log('111111');
    animal.move();
    console.log('222222');
    dog.move();
});