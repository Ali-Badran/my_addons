# -*- coding: utf-8 -*-

from odoo import models, fields, _


class Project(models.Model):
    _inherit = "project.project"

    # Add new fields
    #
    project_risks = fields.One2many('project.risk', 'project_id', string='Risks')

    # Add new methods
    #
    def action_project_risk_open(self):
        self.ensure_one()
        return {
            'name': _('Project Risks'),
            'type': 'ir.actions.act_window',
            'res_model': 'project.risk',
            'view_type': 'form',
            'view_mode': 'form',
            'context': {'default_project_id': self.id},
            'target': 'new',
        }
