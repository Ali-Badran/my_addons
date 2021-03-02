odoo.define('isc_sms_chatting.chatter', function (require) {
    "user strict"

    let Widget = require('web.Widget');
    let rpc = require('web.rpc');
    let MailChatter = require('mail.Chatter');
    let core = require('web.core');

    let _t = core._t;

    MailChatter.include({
        events: _.extend({}, MailChatter.prototype.events, {
            'click .isc_chatter_button_send_sms': '_sendSMSMessage',
        }),

        // init: function (parent, record, mailFields, options) {
        //     console.log('Init:\n', this, '\n', this.fields)
        //     this._super.apply(this, arguments);
        // },

        _sendSMSMessage: function () {
            let default_model = this.context['default_model']
            let default_res_id = this.context['default_res_id']
            console.log("This", typeof default_res_id)
            console.log("This", typeof default_model)
            return this.do_action({
                title: _t('Send SMS Text Message'),
                type: 'ir.actions.act_window',
                res_model: 'chatter.sms.wizard',
                target: 'new',
                views: [[false, 'form']],
                context: {'dialog_size': 'medium', 'default_model': default_model, 'default_res_id': default_res_id},
            });

            // console.log('Send SMS');
            //     let action = {
            //         type: 'ir.actions.act_window',
            //         res_model: 'chatter.sms.wizard',
            //         view_mode: 'form',
            //         views: [[false, 'form']],
            //         res_id: this.id
            //     };
            //     this.do_action(action);
//            rpc.query({
//                model: 'chatter.sms',
//                method: 'send_direct_sms',
//                args: [[]]
//            }).then(function (result) {
//                if (result) {
//                    console.log('Resul')
//                }
//            });
        },
    });
});