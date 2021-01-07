# -*- coding: utf-8 -*-
from odoo import http

# class NewMediaPlans(http.Controller):
#     @http.route('/new_media_plans/new_media_plans/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/new_media_plans/new_media_plans/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('new_media_plans.listing', {
#             'root': '/new_media_plans/new_media_plans',
#             'objects': http.request.env['new_media_plans.new_media_plans'].search([]),
#         })

#     @http.route('/new_media_plans/new_media_plans/objects/<model("new_media_plans.new_media_plans"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('new_media_plans.object', {
#             'object': obj
#         })