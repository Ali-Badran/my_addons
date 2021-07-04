odoo.define('js_training.department_details_widget', function (require) {
    'use strict';

    const Widget = require('web.Widget');
    const widget_registry = require('web.widget_registry');

    let DepartmentDetailsWidget = Widget.extend({
        template: 'department.details.widget.template',
        events: _.extend({}, Widget.prototype.events, {
            'click .fa-info-circle': '_showDepartmentDetails',
        }),

        init: function (parent, params) {
            this.data = params.data;
            this._super(parent);
        },

        willStart: function () {
            console.log('Will Start');
            return this._super.apply(this, arguments);
        },

        start: function () {
            console.log('Start ');
            let self = this;
            let parent = this._super.apply(this, arguments);
            console.log('Start Parent ', parent);
            return this._super.apply(this, arguments).then(function () {
                self._setPopOver();
            });
        },

        _setPopOver: async function () {
            await this._getDepartmentDetails();
        },

        _getDepartmentDetails() {

        },
    });

    widget_registry.add('dept_info_widget', DepartmentDetailsWidget);

    return DepartmentDetailsWidget;
});