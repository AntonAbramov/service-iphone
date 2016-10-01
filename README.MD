// to Minify Javascript run:
NODE_ENV=product webpack

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