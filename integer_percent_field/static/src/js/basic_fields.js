odoo.define('float_percent_field.basic_fields', function(require) {
    "use strict";

    var field_registry = require('web.field_registry');
    var basic_fields = require('web.basic_fields');

    var FieldFloat = basic_fields.FieldFloat;

    var FieldIntPercent = FieldFloat.extend({
        formatType:'IntPercent',
        supportedFieldTypes: ['float'],
    });

    field_registry.add('IntPercent', FieldIntPercent);

    return {FieldIntPercent: FieldIntPercent};
});