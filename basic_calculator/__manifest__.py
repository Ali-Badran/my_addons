# -*- coding: utf-8 -*-
{
    'name': "Basic Calculator",
    'summary': "Basic calculator for Odoo framework",
    'description': "",
    'version': '0.1',
    'category': 'Tools',
    'license': 'LGPL-3',
    'author': "Ali Badran",
    'depends': ['base', 'web'],
    'data': [
        'views/assets.xml'
    ],
    'qweb': [
        'static/src/xml/basic_calculator_layout.xml'
    ],
    'installable': True,
    'application': False,
    'auto_install': False,
}