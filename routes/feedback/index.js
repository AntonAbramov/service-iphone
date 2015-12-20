var express = require('express');
var router = express.Router();

//Database
/*
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/feedbackDb');
*/

//var Feedback = require('../../models/feedback');


router.get('/', function (req, res, next) {
  var collection = [];
  console.log('just get on feedback');

 // var db = req.db;
 // var collection = db.get('feedbacks');
  req.db['feedback'].find({}).sort({'created': -1}, function (err, doc) {
    if (err) throw err;

    res.render('pages/feedback/feedback', {
      title: "Отзывы о работе сервиса Apple | Service-Iphone",
      description: "Отзывы о работе сервисного центра 'Service-iPhone' Киева по ремонту техники Apple.",
      keywords: "отзывы service iphone, service-iphone, киев",
      comments: doc
    });
  });


});

router.post('/', function (req, res, next) {
  // call the built-in save method to save to the database
  req.db['feedback'].insert(req.body, function (err, doc) {
    if (err) throw err;
    res.send('success');
  });
});


module.exports = router;
