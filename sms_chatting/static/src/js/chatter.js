odoo.define('sms_chatting.chatter', function(require){
"user strict"

    var Widget = require('web.Widget');
    var rpc = require('web.rpc');
    var MailChatter = require('mail.Chatter');

    console.log('Mail', MailChatter)
    var Chatter = MailChatter.extend({
        events: _.extend({}, MailChatter.prototype.events, {
            'click .asb_chatter_button_send_sms': '_onSendSMS',
        }),

        /**
         * @private
         */
        _onSendSMS: function () {
            console.log('Send SMS');
            rpc.query({
                model: 'chatter.sms',
                method: 'send_direct_sms',
                args: [[]]
            }).then(function (result) {
                if (result) {
                    console.log('Resul')
                }
            });
        },

    });

    return Chatter;
});