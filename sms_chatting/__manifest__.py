# -*- coding: utf-8 -*-
{
    'name': "SMS Chatting",

    'summary': """Send SMS""",

    'description': """""",

    'author': "Ali Badran",
    'website': "",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/13.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'tools',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'web', 'mail', 'hr'],

    # always loaded
    # only loaded in demonstration mode
    'data': [
        'security/ir.model.access.csv',

        'views/chatter_views.xml',
        'views/assets.xml',
    ],
    'qweb': [
        'static/src/xml/chatter.xml',
    ],
}
