# -*- coding: utf-8 -*-

from odoo import models, fields


class Chatter (models.Model):
    _name = "chatter.sms"
    _inherit = ['mail.thread.cc']
    _description = "Send SMS"

    name = fields.Char("Name")

    def send_direct_sms(self):
        print('okkk\n\n')
        return True
