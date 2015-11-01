var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('pages/iphones/index', {
    title: "Ремонт iPhone 3g/3gs/4/4s/5/5s/6 оригинальные запчасти",
    description: "Делаем ремонт всех моделей iPhone, быстро и качественно, с гарантией 6 месяцев",
    keywords: "Замена стекла, дисплея, экрана, ремонт аккумулятора, батареи iphone, киев",
    menuActive: 'iphone'
  });
});

module.exports = router;
