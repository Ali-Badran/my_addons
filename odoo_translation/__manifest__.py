# -*- coding: utf-8 -*-
{
    'name': "Odoo Translation",

    'summary': """Add Module Name to The Translation View""",

    'description': """
    """,

    'author': "3li Badran",
    'website': "",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/13.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Hidden',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'web'],

    # always loaded
    # only loaded in demonstration mode
    'data': [
        'views/ir_translation_views.xml',
    ],
    'qweb': [
    ],
}
