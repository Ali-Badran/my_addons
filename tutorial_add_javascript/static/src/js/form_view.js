odoo.define("tutorial.form_view.js",function(require){
"use strict";

var FormController = require('web.FormController');
var FormView = require('web.FormView');
var core = require('web.core');
var Dialog = require('web.Dialog');

var _t = core._t;

var Employee2FormController = FormController.include({
    events: _.extend({}, FormController.prototype.events, {
        'click .test-class': '_show_message',
    }),

    _show_message: function(events){
        console.log('Done', events.target.innerText);
        var self = this;
        var message = _t("Test!!");

        Dialog.confirm(self, message, {
            title: _t("Test"),
            confirm_callback: function(){
                console.log('Confirm');
            },
            cancel_callback: function(){
                console.log('Cancelled');
            },
        });
    },
});

var EmployeeFormView = FormView.extend({
    config: _.extend({}, FormView.prototype.config, {
        Controller: Employee2FormController,
    }),
});
})