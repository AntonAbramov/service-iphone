// to Minify Javascript run:
NODE_ENV=production webpack

//on server if mongo thow error run this command
export LC_ALL=C
mongo
// to check status
service mongod status/start/stop/restart

// Deployment
pm2 deploy production

// start
1. run mongod instance
2. nodemon bin/www

on server:
sudo service nginx restart
pm2 restart 0[number-id]

//for optimization image use:
optipng 'name.png' or optipng -[o1-o6] 'name.png'
jpegoptim --strip-all [name.jpg]