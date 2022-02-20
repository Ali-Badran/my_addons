# -*- coding: utf-8 -*-
{
    'name': "Website Training",

    'summary': """Customize The Website""",

    'description': """
    """,

    'author': "Ali Badran",
    'website': "",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/13.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Hidden',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'web', 'website'],

    # always loaded
    # only loaded in demonstration mode
    'data': [
        'security/ir.model.access.csv',

        'views/website_menu_views.xml',
        'views/student_views.xml',
        'views/calendar_template.xml',
        'views/pop_up_template.xml',
        'static/src/xml/student_template.xml',
        'static/src/xml/students_information_template.xml',
        'static/src/xml/create_new_player_template.xml',
    ],
}
