# -*- coding: utf-8 -*-
{
    'name': "Basic Calculator",

    'summary': """Basic Calculator for odoo framework""",

    'description': """
    """,

    'version': '0.1',
    'category': 'Tools',
    'license': 'LGPL-3',

    'author': "Ali Badran",
    'website': "",

    'depends': ['base', 'web'],

    'data': [
        'views/assets.xml'
    ],

    'qweb': [
        'static/src/xml/basic_calculator_layout.xml'
    ],

    'images': [
    ],

    'installable': True,
    'application': False,
    'auto_install': False,
}