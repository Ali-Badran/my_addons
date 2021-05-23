# -*- coding: utf-8 -*-
{
    'name': "MOE Project",

    'summary': "Customization of Project Module",

    'description': """
    """,

    'author': "Info Strategic",
    'website': "http://www.infostrategic.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/13.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Project',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'web', 'project'],

    # always loaded
    'data': [
        'security/ir.model.access.csv',

        'views/project_views.xml',
        'views/project_risk_views.xml',
    ],
}
