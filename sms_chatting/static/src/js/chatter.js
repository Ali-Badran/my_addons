odoo.define('sms_chatting.chatter', function(require){
"user strict"

    var Widget = require('web.Widget');
    var rpc = require('web.rpc');
    var MailChatter = require('mail.Chatter');

    console.log('Mail No.1\n', MailChatter);
    var Chatter = MailChatter.include({
        'template': 'mail.Chatter',
        events: _.extend({}, MailChatter.prototype.events, {
            'click .asb_chatter_button_send_sms': '_sendSMSMessage',
        }),

        init: function (parent, record, mailFields, options) {
            console.log('Init:\n', this, '\n', this.fields)
            this._super.apply(this, arguments);
        },

        _sendSMSMessage: function () {
            console.log('Send SMS');
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

    console.log('Mail No.2\n', Chatter);
    return Chatter;
});