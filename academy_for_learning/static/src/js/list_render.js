odoo.define('isc_mbrch_payment.ListRenderer', function (require) {
    "use strict"

    let ListRenderer = require('web.ListRenderer');

    ListRenderer.include({
        init: function (parent, state, params) {
            this._super.apply(this, arguments);
            console.log('This.. ', this);
            console.log('Decoration.. ', this.rowDecorations);
        },
    });
});