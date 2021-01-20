odoo.define('basic_calculator.Animal', function (require){
"use strict";

var Class = require('web.Class');

var Animal = Class.extend({
    init: function(){
        console.log('Init Animal');
        this.x = 0;
        this.hunger = 0;
    },

    move: function(){
        console.log('Move Animal');
        this.x = this.x + 1;
        this.hunger = this.hunger + 1;
    },

    eat: function(){
        console.log('Eat Animal');
        this.hunger = 0;
    },
});

return Animal;
})