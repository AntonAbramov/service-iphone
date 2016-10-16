var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('serviceiphone', [
  'iphone3',
  'iphone4',
  'iphone4s',
  'iphone5',
  'iphone5s',
  'iphone5c',
  'iphone6',
  'iphone6plus',
  'iphone6s',
  'iphone6splus',
  'ipad2',
  'ipad3',
  'ipad4',
  'ipadmini',
  'ipadmini2',
  'ipadmini3',
  'ipadair',
  'ipadair2',
  'macbookmacbook',
  'macbookpro',
  'macbookproretina',
  'macbookair',
  'feedback'
]);

//Database
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/exampleDb');
//var db = mongoose.connect('mongodb://localhost:27017/exampleDb');



//var mongoose = require('mongoose');
//var db = mongoose.connect('mongodb://localhost:27017/serviceiphone');

var routes = require('./routes/index');
var iphone = require('./routes/iphone/index');
var ipad = require('./routes/ipad/index');
var macbook = require('./routes/macbook/index');
var feedback = require('./routes/feedback/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use('/', routes);
app.use('/', iphone);
app.use('/', ipad);
app.use('/remont-macbook', macbook);
app.use('/feedback', feedback);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
//  res.redirect('/')
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
