import os

class BaseMock(object):

    def __init__(self):
        self.data_folder = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')
        self.base_url = 'http://localhost/api/'
