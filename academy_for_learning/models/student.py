# -*- coding: utf-8 -*-

from odoo import models, fields


class AcademyStudent(models.Model):
    _name = 'academy.student'
    _description = 'Student Info'

    name = fields.Char()
