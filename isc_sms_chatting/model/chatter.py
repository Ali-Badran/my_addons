# -*- coding: utf-8 -*-
import re
import urllib.parse
import urllib.request

from odoo import models, fields, _
from odoo.exceptions import UserError


class ChatterServer(models.Model):
    _name = "chatter.server"
    _description = "Chatter Server"

    def get_sms_api(self, message, mobile_no):
        first_api = self.env['chatter.sms.settings'].search([], order="sequence")
        if first_api:
            sms_msg = re.sub(r' ', '', urllib.parse.quote_plus(message))
            return first_api.messaging_api.replace("{sms_chatting_message}", sms_msg).replace("{sms_chatting_mobile_no}", mobile_no)
        return False

    def check_mobile_number(self, number):
        regex = re.compile(r'^([0-9]{9})$')
        return re.match(regex, number) is not None

    def send_sms_message(self, message, model, res_id, mobile_no):
        """
        Send a sms and log this message
        :param message: string - The message
        :param model: Object - An object from the model
        :param res_id: Integer - The ID of the object
        :param mobile_no: Integer - the mobile number
        :return:
        """
        if not mobile_no or not self.check_mobile_number(mobile_no):
            raise UserError(_("Please enter a correct mobile number."))

        if message:
            messaging_api = self.get_sms_api(message, mobile_no)
            if messaging_api:
                try:
                    # urllib.request.urlopen(messaging_api)
                    print('Sms\n\n', messaging_api)
                    res_obj = self.env[model].search([('id', '=', res_id)])
                    if res_obj:
                        res_obj.message_post(body=_('{} has sent a sms message "{}".').format(self.env.user.partner_id.name, message))
                    return True
                except Exception as e:
                    return str(e)
        return False


class ChatterSettings(models.Model):
    _name = "chatter.sms.settings"
    _description = "Chatter Settings"

    name = fields.Char('Name', index=True)
    messaging_api = fields.Text("API")
    sequence = fields.Integer("Sequence", default=10, help="The highest priority one is used. Default priority is 10 (smaller number = higher priority)")
