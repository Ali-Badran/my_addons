odoo.define('js_training.form_controller', function (require) {
    'use strict';

    const FormController = require('web.FormController');

    FormController.include({
        events: _.extend({}, FormController.prototype.events, {
            'keydown .asb_js_testing': '_onJsTestingKeyDown',
            'keyup .asb_js_testing': '_onJsTestingKeyUp',
            'mousedown .asb_js_testing': '_onJsTestingMouseDown',
            'mousemove .asb_js_testing': '_onJsTestingMouseMove',
            'mouseup .asb_js_testing': '_onJsTestingMouseUp',
        }),

        _onJsTestingKeyDown: function (event) {
            console.log('_onJsTestingKeyDown');
        },

        _onJsTestingKeyUp: function (event) {
            console.log('_onJsTestingKeyUp');
        },

        _onJsTestingMouseDown: function (event) {
            console.log('_onJsTestingMouseDown');
        },

        _onJsTestingMouseMove: function (event) {
            console.log('_onJsTestingMouseMove');
        },

        _onJsTestingMouseUp: function (event) {
            console.log('_onJsTestingMouseUp');
        },
    });
});