# farmaheadapi :tractor:

### install
```bash
$ pip install -e .
```

### configuration
Definitions located at `src/farmahead/core/settings.py`

To set via environment variable (mainly for production) use one of
```
FLASK_CONFIG_CLASS=development  # default, used automatically unless overridden
FLASK_CONFIG_CLASS=testing
FLASK_CONFIG_CLASS=production
```

### database
Only need to run this once, you know the drill
```bash
psql -c 'CREATE DATABASE farmahead_dev;'
```

### cli
```bash
$ python3 -m farmahead --help
# or, if using virtualenv you can do
$ farmahead --help
```

### development
```bash
$ farmahead table createall
$ farmahead runserver
# now in another terminal, use the api to load some data
$ python3 scripts/mock_markets.py
```
Start with a fresh database, asks for confirmation if the `-y` arg is not included
```bash
$ farmahead table dropall -y
```

### deployment

```bash
# Clone the repo (must be in the location specified)
$ git clone https://github.com/b-f-c/farmaheadapi /home/ec2-user/farmaheadapi
$ cd /home/ec2-user/farmaheadapi
# Create a virtualenv
$ python3 -m virtualenv env
$ source env/bin/activate
$ python3 -m pip install -e .
$ psql -c 'CREATE DATABASE farmahead;'
$ python3 -m farmahead table createall
$ sudo ./INSTALL.sh
```
You should now be able to `curl localhost/api/version` successfully, as well as access the application on port 80 from the outside.
