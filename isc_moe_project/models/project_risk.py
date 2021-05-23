# -*- coding: utf-8 -*-

from odoo import models, fields


class ProjectRisk(models.Model):
    _name = "project.risk"
    _description = "Project Risk"
    _inherit = ['mail.thread.cc']

    name = fields.Char('Name', translate=True, tracking=True)
    level = fields.Selection([
        ('high', 'High'),
        ('medium', 'Medium'),
        ('low', 'Low'),
    ], default='medium', string='Level', tracking=True)
    suggested_solution = fields.Text('Suggested Solution', tracking=True)
    state = fields.Selection([
        ('stopped', 'Stopped'),
        ('on_progress', 'On Progress'),
    ], default='stopped', string='State', required=True, tracking=True)
    project_id = fields.Many2one('project.project', string="Project", required=True, tracking=True)

