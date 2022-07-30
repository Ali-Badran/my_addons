odoo.define('js_training.Main', function(require) {
    'use strict';

    let Animal = require('js_training.Animal');
    let Dog = require('js_training.Dog');

    // let DepartmentDetailsWidget = require('js_training.department_details_widget')
    // let deptInfo = new DepartmentDetailsWidget();

    let animal = new Animal();
    // let cat = new Cat();
    let dog = new Dog();
    animal.move();
    dog.move();
});