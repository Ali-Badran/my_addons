# -*- coding: utf-8 -*-
{
    'name': "Colored Tree View",

    'summary': "Change Your Tree Records Color",

    'description': """
        Each record of a tree can be colored according to a few simple conditions.
        The arch description of the tree may have one of the background-x attribute to add a brilliant background color.
         """,

    'author': "Ali Badran",
    'GitHub': "https://github.com/Ali-Badran",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/13.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Theme',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base'],

    # always loaded
    'data': [
        'views/assets.xml',
    ],
}
