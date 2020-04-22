import os
import os.path as osp
from setuptools import setup, find_packages

loc = os.path.dirname(os.path.abspath(__file__))

with open(osp.join(loc, 'requirements.txt')) as f:
    required = f.read().splitlines()

setup(
    version="0.0.3",
    name="farmahead",
    author="@minelminel",
    url="https://github.com/b-f-c/farmaheadapi",
    description="CodeBuffalo Hackathon 2020",
    install_requires=required,
    packages=find_packages("src"),
    package_dir={"": "src"},
    entry_points={
        "console_scripts": [
            "farmahead=farmahead.__main__:main",
        ]
    }
)
