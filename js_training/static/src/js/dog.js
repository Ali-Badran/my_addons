odoo.define('js_training.Dog', function (require) {
    'use strict';

    let Animal = require('js_training.Animal');

    let Dog = Animal.extend({
        init: function(){
            console.log('Init Dog');
        },

        move: function () {
            this._super.apply(this, arguments);
            console.log('Move Dog');
        },
    });

    return Dog;
});