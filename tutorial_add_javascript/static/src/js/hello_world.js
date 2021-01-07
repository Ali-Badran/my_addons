//odoo.define('tutorail.click_button', function (require) {
//"use strict"
//
//var form_widget = require('web.form_widgets')
//var core = require('web.core')
//
//form_widget.WidgetButton.include({
//    on_click: function(){
//        console.log('okk');
//        if(this.node.attrs.custom === "click"){
//            console.log('okk');
//            alert("It works.");
//            return;
//        }
//        this._super();
//    },
//});
//});

odoo.define('hello_world.main', function (require) {
    const AbstractAction = require('web.AbstractAction');
    const core = require('web.core');
    var rpc = require('web.rpc');

    const OurAction = AbstractAction.extend({
        template: "hello_world.ClientAction",

        start: function(){
//            this.$el.html('hello');
            console.log('Start');
            this.print_message('From Ali')
        },

        print_message: function(word){
            var self = this;

            console.log('Message', word);
            rpc.query({
                model: 'print.message',
                method: 'print_message',
                args: [[], 'Aton'],
            })
            .then(function(result){
                for (name in result){
                    console.log('name', result[name]);
                }
            });
        },
    });

    core.action_registry.add('hello_world.action', OurAction);
});


