var express = require('express');
var router = express.Router();

router.get('/ipad-remont', function (req, res, next) {
  res.render('pages/ipads/index', {
    title: "Ремонт iPad, iPad Mini, iPad Retina iPad Air оригинальные запчасти",
    description: "Профессиональный ремонт iPad в Киеве! Качественный ремонт айпадов всех моделей, доступные цены, хорошее качество!",
    keywords: "ремонт ipad, айпад, ремонт ipad mini, ipad retina, Киев",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad2', function (req, res, next) {
  req.db['ipad2'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/ipads/ipad2', {
      title: "Ремонт iPad 2 в Киеве | Сервисный центр Apple - Service-iPhone",
      description: "Срочный ремонт ipad 2 быстро и качественно, используем только оригинальные детали. Даем гарантию 2 года",
      keywords: "Ремонт iPad 2, не заряжается, замена аккумулятора, стекла, экрана",
      menuActive: 'ipad',
      pricesTable: docs
    });
  });
});

router.get('/remont-ipad3', function (req, res, next) {
  req.db['ipad3'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/ipads/ipad3', {
      title: "Ремонт iPad 3 в Киеве | Сервисный центр Apple - Service-iPhone",
      description: "Service-iphone делает ремонт быстро и качественно с гарантией 2 года, мы починим ваш ipad 3!",
      keywords: "Ремонт iPad 3, ремонт после воды, замена стекла, экрана, дисплея, батареии",
      menuActive: 'ipad',
      pricesTable: docs
    });
  });
});

router.get('/remont-ipad4', function (req, res, next) {
  req.db['ipad4'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/ipads/ipad4', {
      title: "Ремонт iPad 4 в Киеве | Сервисный центр Apple - Service-iPhone",
      description: "Цены на ремонт iPad 4 в городе Киеве, Service-iPhone заменит стекло/тачскрин/батарею/wifi и другие детали вашего дивайса!",
      keywords: "Ремонт iPad 4, замена батареии, стекла, дисплея",
      menuActive: 'ipad',
      pricesTable: docs
    });
  });
});

router.get('/remont-ipad-air', function (req, res, next) {
  req.db['ipadair'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/ipads/ipad-air', {
      title: "Ремонт iPad air в Киеве | Сервисный центр Apple - Service-iPhone",
      description: "Быстрый сервис по ремонту iPad air в городе Киеве - Service-iPhone, цены на ремонт вашего ipad air.",
      keywords: "Ремонт iPad air, ремонт батареии, экрана, кнопки iHome",
      menuActive: 'ipad',
      pricesTable: docs
    });
  });
});

router.get('/remont-ipad-air2', function (req, res, next) {
  req.db['ipadair2'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/ipads/ipad-air2', {
      title: "Ремонт iPad air 2 в Киеве | Сервисный центр Apple - Service-iPhone",
      description: "Самый лучший сервис по ремонту iPad air 2 в городе Киеве - Service-iPhone, цены на ремонт вашего iPad Air 2.",
      keywords: "Ремонт iPad Air 2",
      menuActive: 'ipad',
      pricesTable: docs
    });
  });
});

router.get('/remont-ipad-mini', function (req, res, next) {
  req.db['ipadmini'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/ipads/ipad-mini', {
      title: "Ремонт iPad mini в Киеве | Сервисный центр Apple - Service-iPhone",
      description: "Ремонт iPad mini в Киеве. Профессиональный ремонт iPad mini с гарантией до 2х лет. Только original запчасти.",
      keywords: "Ремонт iPad mini",
      menuActive: 'ipad',
      pricesTable: docs
    });
  });
});
router.get('/remont-ipad-mini2', function (req, res, next) {
  req.db['ipadmini2'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/ipads/ipad-mini2', {
      title: "Ремонт iPad mini2 в Киеве | Сервисный центр Apple - Service-iPhone",
      description: "Ремонт iPad mini 2 в Киеве. Профессиональный ремонт iPad mini с гарантией до 2х лет. Цены на ремонт ipad mini 2.",
      keywords: "Ремонт iPad mini2",
      menuActive: 'ipad',
      pricesTable: docs
    });
  });
});

router.get('/remont-ipad-mini3', function (req, res, next) {
  req.db['ipadmini3'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/ipads/ipad-mini3', {
      title: "Ремонт iPad mini3 в Киеве | Сервисный центр Apple - Service-iPhone",
      description: "Ремонт iPad mini 3 в Киеве. Профессиональный ремонт iPad mini с гарантией до 2х лет. Цены на ремонт ipad mini 3.",
      keywords: "Ремонт iPad mini3",
      menuActive: 'ipad',
      pricesTable: docs
    });
  });
});

module.exports = router;
