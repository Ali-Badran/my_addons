from odoo import models, fields, api


class Employee(models.Model):
    _inherit = "hr.employee"

    latitude = fields.Char()
    longitude = fields.Char()
    home_location = fields.Char(string="Home Location")

    def update_employee_location_coordinates(self, employee_id, lat, lon):
        if employee_id and lat and lon:
            self.env['hr.employee'].search([('id', '=', int(employee_id))]).write({'latitude': lat, 'longitude': lon})

