odoo.define("tutorial.web_color", function(require){
"use strict"

var ColorpickerDialog = require("web.ColorpickerDialog");
var core = require('web.core');
var Dialog = require('web.Dialog');
var rpc = require("web.rpc");

var _t = core._t;

var ExtendColorPicker = ColorpickerDialog.include({
    init : function(parent, options){
        console.log('parent', parent);
        console.log('options', options);

        var self = this;
        var rec_model = parent.model;
        var rec_data = parent.recordData;

        this.check_children = false;

        this._super.apply(this, arguments);

        var dialog_buttons = [
            {text: _t('Choose'), classes: 'btn-primary', close: true, click: this._onFinalPick.bind(this)},
            {text: _t('Discard'), close: true},
            {text: _t('Close'), close: false, classes: 'btn-success', click: this._onSelectClose.bind(this)},
        ];

        this._super(parent, _.extend({
            size: 'medium',
            title: _('Pick a color'),
            buttons: dialog_buttons,
        }, options));
    },

    _onSelectClose: function(){
        var self = this;
        var message = _t("Test!!");

        var def1 = new Promise(function (resolve, reject){
            var dialog = Dialog.confirm(self, message, {
                title: _t("Test"),
                confirm_callback: function(){
                    console.log('Confirm');
                },
                cancel_callback: function(){
                    console.log('Cancelled');
                },
            });
        });
        return def1;
    }
})
})