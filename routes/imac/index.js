var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('pages/mac/index', {
    title: "Ремонт MacBook Pro, MacBook Air, iMac",
    description: "Ремонт MacBook в Киеве! Быстрый и Качественный сервис макбуков всех моделей, низкие цены!",
    keywords: "ремонт macbook (макбук) киев ",
    menuActive: 'imac'
  });
});

module.exports = router;
