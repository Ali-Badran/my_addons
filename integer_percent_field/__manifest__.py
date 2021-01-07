# -*- coding: utf-8 -*-
{
    'name': "Integer Percent Field",

    'summary': """ Convert floating field to an integer percentage. """,

    'description': """
              Add a new field type 'IntPercent' and a widget 'IntPercent' to convert floating field to an integer percentage. 
              depending on the 'Percent Field' module by Ksolves India Pvt. Ltd.
      """,
    'author': "Infostrategic",
    'license': 'LGPL-3',
    'category': 'tools',
    'version': '1.0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'web'],

    # always loaded
    'data': [
        'views/assets.xml',
    ],
}
