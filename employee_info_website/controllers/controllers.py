# -*- coding: utf-8 -*-

from odoo import http
from odoo.http import request


class Employee(http.Controller):
    # @http.route('/my_employee_details', type='http', auth='public', website=True)
    # def employee_details(self, **kwargs):
    #     # employee_id = int(kwargs.get('id')) if 'id' in kwargs else False
    #     employee_details = request.env['hr.employee'].sudo().search([])
    #     return request.render('employee_info_website.employee_details_page', {'my_details': employee_details})

    @http.route('/select_employee', type='http', auth='public', website=True, db='odoo_13_db')
    def select_employee(self, **kwargs):
        request.session['db'] = 'odoo_13_db'
        return request.render('employee_info_website.select_employee_page')

    @http.route('/projects2', type='http', auth='public', website=True)
    def select_employee(self, **kwargs):
        projects_details = request.env['project.project'].sudo().search([], limit=3)

        return request.render('employee_info_website.projects_page', {'projects': projects_details})

    @http.route('/employee/uploaded', type='http', auth="public", website=True, db='odoo_13_db')
    def show_employee_info(self, **post):
        request.session['db'] = 'odoo_13_db'
        employee_id = int(post.get('employee_id')) if 'employee_id' in post else False
        print('okkkkkkkk\n\n', employee_id)
        employee_details = request.env['hr.employee'].sudo().search([])
        return request.render('employee_info_website.employee_details_page', {'my_details': employee_details, 'token': employee_id})

