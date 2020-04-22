from .exceptions import ParamTypeException
from typing import List

class ValidateParameters(object):

    def validateInt(self, param, value):
        try:
            return int(value)
        except ValueError:
            raise ParamTypeException(f"Failure tying to parse {param} with value {value} as int")

    def validateList(self, param, values):
        print('values: ' + str(values.__class__))
        if not isinstance(values,list):
            raise ParamTypeException(f"{values} must be list")
        try:
            return [int(val) for val in values]
        except ValueError:
            raise ParamTypeException(f"Failure tying to parse {param} with value {values} as list")

