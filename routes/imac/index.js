var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('pages/mac/index', {
    title: "Ремонт MacBook Pro, MacBook Air, iMac",
    description: "Ремонт MacBook в Киеве! Быстрый и Качественный СЦ в столице, низкие цены!",
    keywords: "ремонт macbook, imac, macbook pro, ремонт макбука, киев ",
    menuActive: 'imac'
  });
});

module.exports = router;
