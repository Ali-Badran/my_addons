odoo.define('js_training.Cat', function (require) {
    'use strict';

    const Animal = require('js_training.Animal');

    Animal.include({
        move: function () {
            this._super.apply(this, arguments);
            console.log("Cat is moving...");
        }
    });
});