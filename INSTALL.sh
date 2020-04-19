#!/usr/bin/env bash
set -e
echo "==> copy in our service file"
sudo cp conf/gunicorn.service /etc/systemd/system/gunicorn.service
echo "==> start our service"
sudo systemctl enable gunicorn.service
sudo systemctl start gunicorn.service
echo "==> copy in the nginx module"
sudo cp conf/farmaheadapi.conf /etc/nginx/sites-available/farmaheadapi.conf
echo "==> remove existing"
sudo rm /etc/nginx/sites-available/default
echo "==> link the site"
sudo ln -s /etc/nginx/sites-available/farmaheadapi.conf /etc/nginx/sites-available/default
echo "==> restart and refresh"
sudo systemctl restart nginx
echo "==> open firewall"
sudo ufw allow 'Nginx HTTP'