# -*- coding: utf-8 -*-
from odoo import models, fields


class Student(models.Model):
    _name = "student.student"
    _description = "Student"

    name = fields.Char('Name')
    wins = fields.Integer('Wins')
    draws = fields.Integer('Draws')
    losses = fields.Integer('Losses')
