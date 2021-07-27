odoo.define('js_training.digital_watch', function (require) {
    'use strict';

    const AbstarctAction = require('web.AbstractAction');
    const core = require('web.core');

    const DigitalWatch = AbstarctAction.extend({
        template: 'js_training.digitalWatchTemplate',

        init: function (parent, value) {
            console.log('Init');
            this._super.apply(this, arguments);
        },

        start: function () {
            console.log('Start');
            return this._super.apply(this, arguments).then(() => {
                this._setTime(this);
            });
        },

        _setTimeFormat: function (number) {
            if (number < 10) {
                return `0${number}`;
            }
            return number;
        },

        _setTime: function (self) {
            let date = new Date();
            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();

            self.$el[0].children[0].innerText = `${self._setTimeFormat(hour)}:${self._setTimeFormat(minute)}:${self._setTimeFormat(second)}`;

            // Update time
            setTimeout(() => {
                this._setTime(self);
            }, 1000);
        }
    });

    core.action_registry.add('digital.watch', DigitalWatch);
});