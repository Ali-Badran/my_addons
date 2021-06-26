odoo.define('js_training.Animal', function (require) {
    "use strict";

    let Class = require('web.Class');

    let Animal = Class.extend({
        init: function () {
            console.log('Init Animal');
            this.x = 0;
            this.hunger = 0;
        },

        move: function () {
            console.log('Move Animal');
            this.x += 1;
            this.hunger += 1;
        },

        eat: function () {
            console.log('Eat Animal');
            this.hunger = 0;
        }
    });

    return Animal;
})