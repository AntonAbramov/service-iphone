var express = require('express');
var router = express.Router();

//Database
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/nodetest2');


router.get('/', function (req, res, next) {
  res.render('pages/feedback/feedback', {
    title: "Отзывы о работе сервиса Apple | Service-Iphone",
    description: "Отзывы о работе сервисного центра 'Service-iPhone' Киева по ремонту техники Apple.",
    keywords: "отзывы service iphone, service-iphone, киев"
  });
});

module.exports = router;
