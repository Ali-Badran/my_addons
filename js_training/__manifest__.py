# -*- coding: utf-8 -*-
{
    'name': "JS Training",
    'summary': "",
    'description': "",
    'version': '0.1',
    'category': 'Training',
    'license': 'LGPL-3',
    'author': "Ali Badran",
    'depends': ['base', 'web', 'hr'],
    'data': [
        'views/views.xml',
        'views/hr_department.xml',

        'views/assets.xml'
    ],
    'qweb': [
        'static/src/xml/oca_template.xml',
        'static/src/xml/department_details_widget_template.xml',
    ],
}
