odoo.define('js_training.Main', function (require) {
    'use strict';

    let Animal = require('js_training.Animal');
    let Dog = require('js_training.Dog');

    let animal = new Animal();
    // let cat = new Cat();
    let dog = new Dog();
    animal.move();
    dog.move();
});