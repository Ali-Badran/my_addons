odoo.define('basic_calculator.Cat', function(require){
    var Animal = require('basic_calculator.Animal');

    Animal.include({
        move: function(){
            this._super.apply(this, arguments);
            console.log("Cat is moving");
        },
    });
});