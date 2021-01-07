odoo.define('tutorial_add_javascript.EmployeeWidget++', function (require) {
    "use strict";

    var Widget = require('web.Widget');
    var widget_registry = require('web.widget_registry');

    var EmployeeWidget = Widget.extend({
        template: 'tutorial_add_javascript.EmployeeTemplate',

        init: function (parent, params) {
            console.log("init section ");
            this._setState(params);
            this._fetchDepartmentEmployee();
            return this._super()
        },

        willStart:function(){
            console.log("willStart section");
            return this._super()
        },

        start : function(){
            console.log("start section");
            return this._super();
        },

        _setState: function(state){
            this.department = state.data.department_id
        },

        _fetchDepartmentEmployee(){
            if (!this.department){
                this.departmentEmployees = null;
                return;
            }
            var self = this;
            console.log('data', this.department)
            this._rpc({
                model: 'hr.employee',
                method: 'test',
            }).then(function (data){
//                this.departmentEmployees = data;
////                    console.log(data);
            });
        },
    });

    widget_registry.add('leave_widget_2', EmployeeWidget);
    return EmployeeWidget;
});
