var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('pages/iwatch/index', {
    title: "Ремонт iWatch в Киеве, Замена стекла от 299грн за 2 часа | Service-iPhone",
    description: "Профессиональный ремонт iWatch в Киеве! Качественный ремонт айпадов всех моделей, доступные цены, хорошее качество!",
    keywords: "ремонт iWatch, Киев",
    menuActive: 'iWatch'
  });
});

//====================== 
//    iWatch
//======================

router.get('/1-series', function (req, res, next) {
  res.render('pages/iwatch/1series', {
    title: "Ремонт iWatch 1 series в Киеве | Service-iPhone",
    description: "Срочный ремонт iWatch первой серии 38 и 42мм",
    keywords: "Ремонт iWatch 1 серия",
    menuActive: 'iWatch'
  });
});

router.get('/2-series', function (req, res, next) {
  res.render('pages/iwatch/2series', {
    title: "Ремонт iWatch 2 series в Киеве | Service-iPhone",
    description: "Срочный ремонт iWatch первой серии 38 и 42мм",
    keywords: "Ремонт iWatch 2 серия",
    menuActive: 'iWatch'
  });
});

router.get('/3-series', function (req, res, next) {
  res.render('pages/iwatch/3series', {
    title: "Ремонт iWatch 3 series в Киеве | Service-iPhone",
    description: "Срочный ремонт iWatch первой серии 38 и 42мм",
    keywords: "Ремонт iWatch 3 серия",
    menuActive: 'iWatch'
  });
});

router.get('/38', function (req, res, next) {
  req.db['iwatch38'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/iwatch/38', {
      title: "Ремонт iWatch 38mm в Киеве | Service-iPhone",
      description: "Срочный ремонт iWatch 38mm быстро и качественно, используем только оригинальные детали",
      keywords: "Ремонт iWatch 38mm",
      menuActive: 'iWatch',
      pricesTable: docs
    });
  });
});

router.get('/42', function (req, res, next) {
  req.db['iwatch42'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/iwatch/42', {
      title: "Ремонт iWatch 42mm в Киеве | Service-iPhone",
      description: "Срочный ремонт iWatch 42mm быстро и качественно, используем только оригинальные детали",
      keywords: "Ремонт iWatch 42mm",
      menuActive: 'iWatch',
      pricesTable: docs
    });
  });
});

router.get('/238', function (req, res, next) {
  req.db['iwatch238'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/iwatch/238', {
      title: "Ремонт iWatch 2 series 38mm в Киеве | Service-iPhone",
      description: "Срочный ремонт iWatch 2 series 38mm быстро и качественно, используем только оригинальные детали",
      keywords: "Ремонт iWatch 2 series 38mm",
      menuActive: 'iWatch',
      pricesTable: docs
    });
  });
});

router.get('/242', function (req, res, next) {
  req.db['iwatch242'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/iwatch/242', {
      title: "Ремонт iWatch 2 series 42mm в Киеве | Service-iPhone",
      description: "Срочный ремонт iWatch 2 series 42mm быстро и качественно, используем только оригинальные детали",
      keywords: "Ремонт iWatch 2 series 42mm",
      menuActive: 'iwatch',
      pricesTable: docs
    });
  });
});

router.get('/338', function (req, res, next) {
  req.db['iwatch338'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/iwatch/338', {
      title: "Ремонт iWatch 3 series 38mm в Киеве | Service-iPhone",
      description: "Срочный ремонт iWatch 3 series 38mm быстро и качественно, используем только оригинальные детали",
      keywords: "Ремонт iWatch 3 series 38mm",
      menuActive: 'iWatch',
      pricesTable: docs
    });
  });
});

router.get('/342', function (req, res, next) {
  req.db['iwatch342'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/iwatch/342', {
      title: "Ремонт iWatch 3 series 42mm в Киеве | Service-iPhone",
      description: "Срочный ремонт iWatch 3 series 42mm быстро и качественно, используем только оригинальные детали",
      keywords: "Ремонт iWatch 3 series 42mm",
      menuActive: 'iWatch',
      pricesTable: docs
    });
  });
});


module.exports = router;
