# -*- coding: utf-8 -*-
from odoo import http


class Student(http.Controller):
    @http.route('/players', auth='public')
    def get_players_information(self):
        players = http.request.env['student.student'].search([])
        return http.request.render('website_training.website_students_information_template', {'players': players or []})

    @http.route('/players/create', auth='public')
    def create_new_player(self):
        return http.request.render('website_training.website_create_new_player_template')

    @http.route('/players/setPlayerInformation', type="json", auth='public', website=True, methods=['POST'])
    def set_player_information(self, **kw):
        values = {'name': kw['name'], 'wins': kw['wins'], 'draws': kw['draws'], 'losses': kw['losses']}
        http.request.env['student.student'].create(values)
        return True

    @http.route('/players/delete', type="http", auth='public', website=True)
    def delete_player(self, **kw):
        domain = [('id', '=', kw['id'])]
        http.request.env['student.student'].search(domain).unlink()
        return http.request.redirect("/players")
        # return True

    @http.route('/calendar', auth='public')
    def set_player_information(self):
        print('Pascal\n\n')
        return http.request.render('website_training.calendar_template')

    @http.route('/pouUp', auth='public')
    def set_player_information(self):
        print('Pascal\n\n')
        return http.request.render('website_training.pop_up_template')

    # @http.route('/create_student', type='http', auth='public', website=True)
    # def create_students(self, **kw):
    #     print('Pascal2\n\n', kw)
    #     values = {'name': kw['name'], 'age': kw['age']}
    #     http.request.env['student.student'].create(values)
    #     students = http.request.env['student.student'].search([])
    #     return http.request.render('website_training.website_student_info_template', {'students': students})


# website.student.template

#     @http.route('/temp/temp/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('temp.listing', {
#             'root': '/temp/temp',
#             'objects': http.request.env['temp.temp'].search([]),
#         })

    # @http.route('/temp/temp/objects/<model("temp.temp"):obj>/', auth='public')
    # def object(self, obj, **kw):
    #     return http.request.render('temp.object', {
    #         'object': obj
    #     })
