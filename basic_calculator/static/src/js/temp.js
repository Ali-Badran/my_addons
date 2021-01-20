odoo.define('basic.calculator.temp', function(require){
    'use strict';

    var Animal = require('basic_calculator.Animal');
//    var Cat = require('basic_calculator.Cat');
    var Dog = require('basic_calculator.Dog');
//    console.log('Animal', Animal);

    var animal = new Animal();
    var dog = new Dog();

    console.log('Animal');
    animal.move();
    console.log('\nDog');
    dog.move();
});