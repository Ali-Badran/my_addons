odoo.define('js_training.form_view', function (require) {
    'use strict';

    const FormView = require('web.FormView');

    FormView.include({
        events: _.extend({}, FormView.prototype.events, {
            'click .asb_js_testing': '_onJsTestingButtonClick',
        }),

        _onJsTestingButtonClick: function (event) {
            console.log('JS Testing Form View');
        },
    });
});