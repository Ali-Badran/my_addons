# -*- coding: utf-8 -*-

from odoo import models, fields


class PrintMessage(models.Model):
    _name = 'print.message'

    message = fields.Char()

    def print_message(self, base_name):
        list = ['Hasan', 'Hasson', base_name]
        return list


class HrEmployee(models.Model):
    _inherit = 'hr.employee'

    color_p = fields.Char('Color')
    # p = fields.Percent('tes')
    sel = fields.Selection([('apple', 'Apple'), ('orange', 'Orange')], default='apple', string='Fruit')
    long = fields.Float()

