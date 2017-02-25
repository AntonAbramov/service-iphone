var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('pages/macbook/index', {
    title: "Ремонт MacBook Pro, MacBook Air и iMac в Киеве | Замена дидсплея macbook | Service iPhone",
    description: "Профессиональный ремонт MacBook Apple в Киеве. Качественный сервис макбуков. Звоните (066) 566-97-52",
    keywords: "ремонт macbook (макбук), MacBook Pro, Сервис Apple в Киеве",
    menuActive: 'imac'
  });
});


//======================
//    MacBook Air
//======================

router.get('/air', function (req, res, next) {
  res.render('pages/macbook/air/index', {
    title: "Ремонт MacBook Air в Киеве | Замена стекла MacBook Air | Service iPhone",
    description: "Ремонт MacBook в Киеве. Профессиональное обслуживание по ремонту техники Apple | Service-iPhone (066) 566-97-52",
    keywords: "ремонт macbook",
    menuActive: 'imac'
  });
});

router.get('/air/a1237', function (req, res, next) {
  req.db['macbookaira1237'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/macbook/air/1237', {
      title: "Ремонт MacBook Air A1237 в Service-iPhone",
      description: "Ремонт MacBook Air A1237 в Киеве! Гарантия качества! Более детальную информацию уточняйте по телефону: (066) 566-97-52",
      keywords: "ремонт macbook",
      menuActive: 'imac',
      pricesTable: docs
    });
  });
});

router.get('/air/a1304', function (req, res, next) {
  req.db['macbookaira1304'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/macbook/air/1304', {
      title: "Ремонт MacBook Air A1304 | Замена идсплея macbook air A1304 | в Service-iPhone",
      description: "Ремонт MacBook air A1304 в Киев. Пополурная модель макбука, которая иногда может ломаться но наши специлаисты помогут отремонтировать ваш макбук.",
      keywords: "ремонт macbook",
      menuActive: 'imac',
      pricesTable: docs
    });
  });
});

router.get('/air/a1369', function (req, res, next) {
  req.db['macbookaira1369'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/macbook/air/1369', {
      title: "Ремонт MacBook Air A1369 в Service-iPhone",
      description: "в Киеве вы сможете отремонтировать MacBook Air A1369 по низкой цене. Более детальную инфомрацию Вы найдете на нашем сайте",
      keywords: "ремонт macbook",
      menuActive: 'imac',
      pricesTable: docs
    });
  });
});

router.get('/air/a1370', function (req, res, next) {
  req.db['macbookaira1370'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/macbook/air/1370', {
      title: "Ремонт MacBook Air A1370 в Service-iPhone",
      description: "Ремонт MacBook Air A1370 в сервисном центре Apple в Киеве. Выгодные цены на ремонт макбук эир любой сложности, бесплатная диагностика.",
      keywords: "ремонт macbook",
      menuActive: 'imac',
      pricesTable: docs
    });
  });
});

router.get('/air/a1465', function (req, res, next) {
  req.db['macbookaira1465'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/macbook/air/1465', {
      title: "Ремонт MacBook Air A1465 в Service-iPhone",
      description: "Ремонт MacBook Air A1465 в сервисном центре Apple в Киеве. Выгодные цены на ремонт макбук эир любой сложности, бесплатная диагностика.",
      keywords: "ремонт macbook",
      menuActive: 'imac',
      pricesTable: docs
    });
  });
});

router.get('/air/a1466', function (req, res, next) {
  req.db['macbookaira1466'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/macbook/air/1466', {
      title: "Ремонт MacBook Air A1466 в Service-iPhone",
      description: "Ремонт MacBook Air A1466 в сервисном центре Apple в Киеве. Выгодные цены на ремонт макбук эир любой сложности, бесплатная диагностика.",
      keywords: "ремонт macbook",
      menuActive: 'imac',
      pricesTable: docs
    });
  });
});

//======================
//    MacBook Pro
//======================

router.get('/pro', function (req, res, next) {
  res.render('pages/macbook/pro/index', {
    title: "Ремонт MacBook Pro в Service-iPhone",
    description: "Ремонт MacBook Pro в Киеве! Выгодные цены на ремонт макбук про любой сложности, бесплатная диагностика.",
    keywords: "ремонт macbook",
    menuActive: 'imac'
  });
});

router.get('/pro/a1278', function (req, res, next) {
  req.db['macbookproa1278'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/macbook/pro/1278', {
      title: "Ремонт MacBook Pro A1278 в Service-iPhone",
      description: "Ремонт MacBook Pro A1278 в сервисном центре Apple в Киеве. Выгодные цены на ремонт макбук про любой сложности, бесплатная диагностика.",
      keywords: "ремонт macbook",
      menuActive: 'imac',
      pricesTable: docs
    });
  });
});

router.get('/pro/a1286', function (req, res, next) {
  req.db['macbookproa1286'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/macbook/pro/1286', {
      title: "Ремонт MacBook Pro A1286 в Service-iPhone",
      description: "Ремонт MacBook Pro A1286 в сервисном центре Apple в Киеве. Выгодные цены на ремонт макбук про любой сложности, бесплатная диагностика.",
      keywords: "ремонт macbook",
      menuActive: 'imac',
      pricesTable: docs
    });
  });
});

//======================
//    MacBook Pro Retina
//======================

router.get('/proretina', function (req, res, next) {
  res.render('pages/macbook/proretina/index', {
    title: "Ремонт MacBook Pro retina в Service-iPhone",
    description: "Ремонт MacBook Pro Retina в сервисном центре Apple в Киеве. Выгодные цены на ремонт макбук про ретина любой сложности, бесплатная диагностика.",
    keywords: "ремонт macbook",
    menuActive: 'imac'
  });
});

router.get('/proretina/a1398', function (req, res, next) {
  req.db['macbookproretinaa1398'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/macbook/proretina/1398', {
      title: "Ремонт MacBook Pro Retina A1398 в Service-iPhone",
      description: "Ремонт MacBook Pro Retina A1398 в сервисном центре Apple в Киеве. Выгодные цены на ремонт макбук про ретина любой сложности, бесплатная диагностика.",
      keywords: "ремонт macbook",
      menuActive: 'imac',
      pricesTable: docs
    });
  });
});

router.get('/proretina/a1425', function (req, res, next) {
  req.db['macbookproretinaa1425'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/macbook/proretina/1425', {
      title: "Ремонт MacBook Pro Retina A1425 в Service-iPhone",
      description: "Ремонт MacBook Pro Retina A1425 в сервисном центре Apple в Киеве. Выгодные цены на ремонт макбук про ретина любой сложности, бесплатная диагностика.",
      keywords: "ремонт macbook",
      menuActive: 'imac',
      pricesTable: docs
    });
  });
});

router.get('/proretina/a1502', function (req, res, next) {
  req.db['macbookproretinaa1502'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/macbook/proretina/1502', {
      title: "Ремонт MacBook Pro Retina A1502 в Service-iPhone",
      description: "Ремонт MacBook Pro Retina A1502 в сервисном центре Apple в Киеве. Выгодные цены на ремонт макбук про ретина любой сложности, бесплатная диагностика.",
      keywords: "ремонт macbook",
      menuActive: 'imac',
      pricesTable: docs
    });
  });
});

//======================
//    MacBook
//======================



module.exports = router;
