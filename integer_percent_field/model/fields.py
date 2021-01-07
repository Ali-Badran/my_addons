# -*- coding: utf-8 -*-

from odoo import fields, _
from odoo.fields import Float
from odoo.tools import float_repr, float_round
from odoo.exceptions import ValidationError


class IntPercent(Float):
    type = 'IntPercent'
    column_cast_from = ('int4', 'numeric', 'float8')

    _slots = {
        '_digits': None,
        'group_operator': 'sum',
    }

    @property
    def column_type(self):
        return ('numeric', 'numeric') if self._digits is not None else ('float8', 'double precision')

    _model_name = property(fields.attrgetter('name'))

    def convert_to_column(self, value, record, values=None, validate=True):
        result = float(value or 0.0)
        digits = self.get_digits(record.env)
        if digits:
            precision, scale = digits
            result = float_repr(float_round(result, precision_digits=scale), precision_digits=scale)
            if result < 0 or result > 100:
                raise ValidationError(_("Percentage can be 0 to 100 only."))

            return result


fields.IntPercent = IntPercent
