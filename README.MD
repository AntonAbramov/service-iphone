// to Minify Javascript run:
NODE_ENV=production webpack

//on server if mongo thow error run this command
export LC_ALL=C
mongo
// to check status
service mongod status/start/stop/restart

// Deployment
pm2 deploy production -p [numnerOfPort]

// start
1. run mongod instance: mongod
2. nodemon bin/www
3. open http://localhost:4000/

on server:
sudo service nginx restart
pm2 restart 0[number-id]

//for optimization image use:
optipng 'name.png' or optipng -[o1-o6] 'name.png'
jpegoptim --strip-all [name.jpg]

to generate ssl certificate:
1) go to cd /opt/letsencrypt
2) run ./letsencrypt-auto certonly --standalone
3) to increas security sudo openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048

to setup a cronjob
sudo crontab -e
00 1 * * 1 /opt/letsencrypt/letsencrypt-auto renew >> /var/log/letsencrypt-renewal.log
30 1 * * 1 /bin/systemctl reload nginx

//check folder sizes
du -sh /*