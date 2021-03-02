# -*- coding: utf-8 -*-
import urllib.parse
import re
import urllib.request

from odoo import models, fields, api, _
from odoo.exceptions import ValidationError


class Chatter(models.TransientModel):
    _name = "chatter.sms.wizard"
    _description = "Send SMS"

    recipient = fields.Many2one('res.partner', string='Recipient')
    mobile_number = fields.Char("Mobile Number")
    sms_message = fields.Text("Message")
    model = fields.Char("Model")
    res_id = fields.Char("Resource ID")

    ##################
    ##################
    @api.onchange('recipient')
    def _onchange_recipient(self):
        for rec in self:
            rec.mobile_number = rec.recipient.mobile

    def send_sms(self):
        self.env["chatter.server"].send_sms_message(self.sms_message, self.model, self.res_id, self.mobile_number)

    def check_mobile_number(self, number):
        regex = re.compile(r'^971([0-9]{9})$')
        return re.match(regex, number) is not None

    def send_sms_message(self, message, model_obj, receiver_obj):
        """
        Send sms to a partner and log this message
        :param message: string - The Message
        :param model_obj: Object - An Object from the Model
        :param receiver_obj: Object - An Object from the Receiver Model
        :return:
        """
        if not receiver_obj:
            raise ValidationError(_("Please enter a correct receiver."))

        mobile_no = receiver_obj.mobile
        if not mobile_no or not self.check_mobile_number(mobile_no):
            raise ValidationError(_("Please enter a correct mobile number."))
        sms_msg = ''
        if message:
            sms_msg = urllib.parse.quote_plus(message)
            sms_msg = re.sub(r' ', '', sms_msg)
        url = "https://smartmessaging.etisalat.ae:9095/campaignService/campaigns/qs?jobType=0&msgCategory=4.5&channel=2.1&recipient={}&contentType=3.1&dr=false&msg={}&user=Kelmallah&pswd=@dmin@mbrch@99!&dndCategory=Campaign&sender=MBRCharity".format(
            mobile_no, sms_msg)
        if len(url) > 2000:
            raise ValidationError(_("SMS message is too long."))
        try:
            urllib.request.urlopen(url)
            values = {'name': f'sms/{model_obj.name}', 'message': message, 'res_model': model_obj._name,
                      'res_id': model_obj.id, 'partner': receiver_obj.name, 'msg_type': 'sms'}
            self.env['sent.messages.log'].sudo().create(values)
            model_obj.message_post(
                body=_('{} has sent a sms message "{}".').format(self.env.user.partner_id.name, message))
            return True
        except Exception as e:
            return str(e)

    # def send_direct_sms(self):
    #     print('okkk\n\n')
    #     return True
