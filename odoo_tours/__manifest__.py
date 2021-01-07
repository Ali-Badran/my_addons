# -*- coding: utf-8 -*-
{
    'name': "Odoo Tours",

    'summary': """
        Example for odoo tours""",

    'description': """
        This is an example application to learn the basics of the JS framework.
    """,

    'author': "Ali Badran",
    'website': "http://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/13.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'web'],

    # always loaded
    'data': [
        'views/assets.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
    'qweb': [
        # 'static/src/xml/hello_world.xml',
        # 'static/src/xml/employee_template.xml',
    ],
}
