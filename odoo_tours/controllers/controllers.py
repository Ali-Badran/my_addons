# -*- coding: utf-8 -*-
# from odoo import http


# class TutorialAddJavascript(http.Controller):
#     @http.route('/tutorial_add_javascript/tutorial_add_javascript/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/tutorial_add_javascript/tutorial_add_javascript/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('tutorial_add_javascript.listing', {
#             'root': '/tutorial_add_javascript/tutorial_add_javascript',
#             'objects': http.request.env['tutorial_add_javascript.tutorial_add_javascript'].search([]),
#         })

#     @http.route('/tutorial_add_javascript/tutorial_add_javascript/objects/<model("tutorial_add_javascript.tutorial_add_javascript"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('tutorial_add_javascript.object', {
#             'object': obj
#         })
