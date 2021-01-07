odoo.define('float_percent_field.field_utils_format', function(require) {
    "use strict"

    var field_utils = require('web.field_utils');
    var basic_controller = require('web.BasicController');
    var core = require('web.core');

    var _t = core._t;

    function formatIntPercent(value){
        if (value){
            return value.toFixed(0) + "%";
        }
        else{
            return 0 + "%";
        }
    }

    function parseIntPercent(value){
        if (value){
            var lastChar = value[value.length - 1];
            var parsed = value.slice(0, -1);

            if (isNaN(parsed)){
                throw new Error(_.str.sprintf(core._t("'%s' is not a correct value"), value));
            }
            else{
                if (lastChar !== "%"){
                    if (isNaN(lastChar)){
                        throw new Error(_.str.sprintf(core._t("'%s' is not a correct value"), value));
                    }
                    else{
                        if (value > 100 || value < 0){
                            throw new Error(_.str.sprintf(core._t("'%s' is not a correct value"), value));
                        }
                        else{
                            return value;
                        }
                    }
                }
                else{
                    if (parsed > 100 || parsed < 0){
                        throw new Error(_.str.sprintf(core._t("'%s' is not a correct value"), value));
                    }
                    else{
                        return parsed;
                    }
                }
            }
        }
    }

    field_utils['format']['IntPercent'] = formatIntPercent;
    field_utils['parse']['IntPercent'] = parseIntPercent;

    basic_controller.include({
        _notifyInvalidFields: function (invalidFields){
            var record = this.model.get(this.handle, {raw: true});
            var fields = record.fields;

            var self = this;

            var call_once = true;
            var if_int_percent = true;
            var errors = invalidFields.map(function (fieldName){
                var fieldType = fields[fieldName].type;

                if (fieldType === "IntPercent"){
                    if_int_percent = false;
                    self.do_warn(_t("Percent field value must be 0 to 100 only"));
                }

                if (call_once && if_int_percent){
                    call_once = false;
                    self._super(invalidFields);
                }
            });
        }
    });
});