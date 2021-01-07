# -*- coding: utf-8 -*-
{
    'name': "Media",

    'summary': """Add news, photos, and videos about enterprise activity""",

    'description': """ """,

    'author': "Infostrategic",
    'website': "http://www.infostrategic.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/master/odoo/addons/base/module/module_data.xml
    # for the full list
    'category': 'tool',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'hr'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',

        'views/emp.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
}