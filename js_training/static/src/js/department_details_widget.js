odoo.define('js_training.department_details_widget', function (require) {
    'use strict';

    const Widget = require('web.Widget');
    const widget_registry = require('web.widget_registry');
    const core = require('web.core');
    const QWeb = core.qweb;
    const _t = core._t;

    let DepartmentDetailsWidget = Widget.extend({
        template: 'department.details.widget.template',

        init: function (parent, params) {
            this.data = params.data;
            this._super(parent);
        },

        willStart: function () {
            return this._super.apply(this, arguments);
        },

        start: function () {
            // let self = this;
            return this._super.apply(this, arguments).then(() => {
                this._setPopOver();
            });
        },

        _setPopOver: function () {
            let baseHtml = '' +
                '<div class="popover" role="tooltip">' +
                '<div class="arrow"></div>' +
                '<h3 class="popover-header"></h3>' +
                '<div class="popover-body"></div>' +
                '</div>'
            let contentTemplate = 'department_details_widget_content';
            let content = $(QWeb.render(contentTemplate, {data: this.data,}));
            let options = {
                content: content,
                html: true,
                placement: 'left',
                trigger: 'click',
                title: _t('Dept Info'),
                delay: {'show': 200, 'hide': 100,},
                template: baseHtml,
            };
            // Enable popover via JS
            this.$el.popover(options);
        },

        _showDepartmentDetails() {
            this.$el.find('.fa-info-circle').prop('checked', true);
        },
    });

    widget_registry.add('dept_info_widget', DepartmentDetailsWidget);

    return DepartmentDetailsWidget;
});