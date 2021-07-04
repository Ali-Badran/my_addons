odoo.define('js_training.CounterWidget', function (require) {
    'use strict';

    const Widget = require('web.Widget');

    const CounterWidget = Widget.extend({
        template: 'counter.widget.template',
        events: {
          'click button': '_onClick',
        },
        init: function (parent, value) {
            this._super(parent);
            this.counter = value;
        },
        _onClick: function () {
            this.counter++;
            this.$('.counter-value').text(this.count);
        },
    });
});