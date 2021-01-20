odoo.define('basic_calculator.Dog', function(require){
    var Animal = require('basic_calculator.Animal');

    var Dog = Animal.extend({
        move: function(){
            this.bark();
            this._super.apply(this, arguments);
        },

        bark: function(){
            this.eat();
            console.log('woof');
        },
    });

    return Dog;
});