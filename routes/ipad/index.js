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

//======================
//    iPad 2
//======================

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

router.get('/remont-ipad2/zamena-batarei', function (req, res, next) {
  res.render('pages/ipads/ipad2/zamena-batarei', {
    title: "Замена батареи (аккумулятора) ipad 2 в Киеве | Service-iPhone",
    description: "ipad быстро разряжается? Или не работает батарея? В Service-ipad быстро найдут причину неполадки и сделают качественный ремонт",
    keywords: "Замена батареи ipad 2, Киев, ремонт аккумулятора ipad 2, замена батареи айпад 2",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad2/zamena-ekrana', function (req, res, next) {
  res.render('pages/ipads/ipad2/zamena-ekrana', {
    title: "Замена экрана (дисплея) ipad 2 в Киеве | Service-iPhone",
    description: "Качественная замена экрана (дисплея) на ipad 2 в Киеве. Цены от 200 грн. Время на ремонт от 20 минут.",
    keywords: "Замена дисплея ipad 2, замена экрана ipad 2, Киев, замена дисплея айпад 2, экрана",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad2/zamena-stekla', function (req, res, next) {
  res.render('pages/ipads/ipad2/zamena-stekla', {
    title: "Замена стекла (тачскрина) ipad 2 в Киеве | Service-ipad",
    description: "Качественная замена стекла (дисплея) на ipad 2 в Киеве. от 200 грн. Ремонт от 20 минут.",
    keywords: "Замена стекла ipad 2, замена экрана ipad 2, Киев, замена дисплея ipad 2, экрана",
    menuActive: 'ipad'
  });
});

//======================
//    iPad 3
//======================

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

router.get('/remont-ipad3/zamena-batarei', function (req, res, next) {
  res.render('pages/ipads/ipad3/zamena-batarei', {
    title: "Замена батареи (аккумулятора) ipad 3 в Киеве | Service-iPhone",
    description: "Сервисный центр Apple, производит замену батаери для ipad 3 очень быстро, постоянные скидки и акции!",
    keywords: "Замена батареи ipad 3, Киев, ремонт аккумулятора ipad 3, замена батареи айпад 3",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad3/zamena-ekrana', function (req, res, next) {
  res.render('pages/ipads/ipad3/zamena-ekrana', {
    title: "Замена экрана (дисплея) ipad 3 в Киеве | Service-iPhone",
    description: "Качественная замена экрана (дисплея) на ipad 3 в Киеве. Цены от 300 грн. Время на ремонт от 30 минут.",
    keywords: "Замена дисплея ipad 3, замена экрана ipad 3, Киев, замена дисплея айпад 3, экрана",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad3/zamena-stekla', function (req, res, next) {
  res.render('pages/ipads/ipad3/zamena-stekla', {
    title: "Замена стекла (тачскрина) ipad 3 в Киеве | Service-ipad",
    description: "Качественная замена стекла (дисплея) на ipad 3 в Киеве. от 300 грн. Ремонт от 30 минут.",
    keywords: "Замена стекла ipad 3, замена экрана ipad 3, Киев, замена дисплея ipad 3, экрана",
    menuActive: 'ipad'
  });
});

//======================
//    iPad 4
//======================

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

router.get('/remont-ipad4/zamena-batarei', function (req, res, next) {
  res.render('pages/ipads/ipad4/zamena-batarei', {
    title: "Замена батареи (аккумулятора) ipad 4 в Киеве | Service-iPhone",
    description: "Если у вас быстро разряжается айпад 4, в СЦ - Service-iPhone сделают бесплатную диагностику вашей батаерии, и в случаии необходимоти сделают замену аккумулятора.",
    keywords: "Замена батареи ipad 4, Киев, ремонт аккумулятора ipad 4, замена батареи айпад 4",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad4/zamena-ekrana', function (req, res, next) {
  res.render('pages/ipads/ipad4/zamena-ekrana', {
    title: "Замена экрана (дисплея) ipad 4 в Киеве | Service-iPhone",
    description: "Качественная замена экрана (дисплея) на ipad 4 в Киеве. Цены от 400 грн. Время на ремонт от 40 минут.",
    keywords: "Замена дисплея ipad 4, замена экрана ipad 4, Киев, замена дисплея айпад 4, экрана",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad4/zamena-stekla', function (req, res, next) {
  res.render('pages/ipads/ipad4/zamena-stekla', {
    title: "Замена стекла (тачскрина) ipad 4 в Киеве | Service-ipad",
    description: "Качественная замена стекла (дисплея) на ipad 4 в Киеве. от 400 грн. Ремонт от 40 минут.",
    keywords: "Замена стекла ipad 4, замена экрана ipad 4, Киев, замена дисплея ipad 4, экрана",
    menuActive: 'ipad'
  });
});

//======================
//    iPad air
//======================

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

router.get('/remont-ipad-air/zamena-batarei', function (req, res, next) {
  res.render('pages/ipads/ipadair/zamena-batarei', {
    title: "Замена батареи (аккумулятора) ipad air в Киеве | Service-iPhone",
    description: "ipad быстро разряжается? Или не работает батарея? В Service-ipad быстро найдут причину неполадки и сделают качественный ремонт",
    keywords: "Замена батареи ipad air, Киев, ремонт аккумулятора ipad air, замена батареи айпад air",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad-air/zamena-ekrana', function (req, res, next) {
  res.render('pages/ipads/ipadair/zamena-ekrana', {
    title: "Замена экрана (дисплея) ipad air в Киеве | Service-iPhone",
    description: "Качественная замена экрана (дисплея) на ipad air в Киеве. Цены от 200 грн. Время на ремонт от 20 минут.",
    keywords: "Замена дисплея ipad air, замена экрана ipad air, Киев, замена дисплея айпад air, экрана",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad-air/zamena-stekla', function (req, res, next) {
  res.render('pages/ipads/ipadair/zamena-stekla', {
    title: "Замена стекла (тачскрина) ipad air в Киеве | Service-ipad",
    description: "Качественная замена стекла (дисплея) на ipad air в Киеве. от 200 грн. Ремонт от 20 минут.",
    keywords: "Замена стекла ipad air, замена экрана ipad air, Киев, замена дисплея ipad air, экрана",
    menuActive: 'ipad'
  });
});

//======================
//    iPad air 2
//======================

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

router.get('/remont-ipad-air2/zamena-batarei', function (req, res, next) {
  res.render('pages/ipads/ipadair2/zamena-batarei', {
    title: "Замена батареи (аккумулятора) ipad air 2 в Киеве | Service-iPhone",
    description: "ipad быстро разряжается? Или не работает батарея? В Service-ipad быстро найдут причину неполадки и сделают качественный ремонт",
    keywords: "Замена батареи ipad air 2, Киев, ремонт аккумулятора ipad air 2, замена батареи айпад air 2",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad-air2/zamena-ekrana', function (req, res, next) {
  res.render('pages/ipads/ipadair2/zamena-ekrana', {
    title: "Замена экрана (дисплея) ipad air 2 в Киеве | Service-iPhone",
    description: "Качественная замена экрана (дисплея) на ipad air 2 в Киеве. Цены от 200 грн. Время на ремонт от 20 минут.",
    keywords: "Замена дисплея ipad air 2, замена экрана ipad air 2, Киев, замена дисплея айпад air 2, экрана",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad-air2/zamena-stekla', function (req, res, next) {
  res.render('pages/ipads/ipadair2/zamena-stekla', {
    title: "Замена стекла (тачскрина) ipad air 2 в Киеве | Service-ipad",
    description: "Качественная замена стекла (дисплея) на ipad air 2 в Киеве. от 200 грн. Ремонт от 20 минут.",
    keywords: "Замена стекла ipad air 2, замена экрана ipad air 2, Киев, замена дисплея ipad air 2, экрана",
    menuActive: 'ipad'
  });
});

//======================
//    iPad mini
//======================

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

router.get('/remont-ipad-mini/zamena-batarei', function (req, res, next) {
  res.render('pages/ipads/ipadmini/zamena-batarei', {
    title: "Замена батареи (аккумулятора) ipad mini в Киеве | Service-iPhone",
    description: "ipad быстро разряжается? Или не работает батарея? В Service-ipad быстро найдут причину неполадки и сделают качественный ремонт",
    keywords: "Замена батареи ipad mini, Киев, ремонт аккумулятора ipad mini, замена батареи айпад mini",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad-mini/zamena-ekrana', function (req, res, next) {
  res.render('pages/ipads/ipadmini/zamena-ekrana', {
    title: "Замена экрана (дисплея) ipad mini в Киеве | Service-iPhone",
    description: "Качественная замена экрана (дисплея) на ipad mini в Киеве. Цены от 200 грн. Время на ремонт от 20 минут.",
    keywords: "Замена дисплея ipad mini, замена экрана ipad mini, Киев, замена дисплея айпад mini, экрана",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad-mini/zamena-stekla', function (req, res, next) {
  res.render('pages/ipads/ipadmini/zamena-stekla', {
    title: "Замена стекла (тачскрина) ipad mini в Киеве | Service-ipad",
    description: "Качественная замена стекла (дисплея) на ipad mini в Киеве. от 200 грн. Ремонт от 20 минут.",
    keywords: "Замена стекла ipad mini, замена экрана ipad mini, Киев, замена дисплея ipad mini, экрана",
    menuActive: 'ipad'
  });
});

//======================
//    iPad mini 2
//======================

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

router.get('/remont-ipad-mini2/zamena-batarei', function (req, res, next) {
  res.render('pages/ipads/ipadmini2/zamena-batarei', {
    title: "Замена батареи (аккумулятора) ipad mini 2 в Киеве | Service-iPhone",
    description: "ipad быстро разряжается? Или не работает батарея? В Service-ipad быстро найдут причину неполадки и сделают качественный ремонт",
    keywords: "Замена батареи ipad mini 2, Киев, ремонт аккумулятора ipad mini2, замена батареи айпад mini 2",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad-mini2/zamena-ekrana', function (req, res, next) {
  res.render('pages/ipads/ipadmini2/zamena-ekrana', {
    title: "Замена экрана (дисплея) ipad mini2 в Киеве | Service-iPhone",
    description: "Качественная замена экрана (дисплея) на ipad mini 2 в Киеве. Цены от 200 грн. Время на ремонт от 20 минут.",
    keywords: "Замена дисплея ipad mini 2, замена экрана ipad mini 2, Киев, замена дисплея айпад mini2, экрана",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad-mini2/zamena-stekla', function (req, res, next) {
  res.render('pages/ipads/ipadmini2/zamena-stekla', {
    title: "Замена стекла (тачскрина) ipad mini2 в Киеве | Service-ipad",
    description: "Качественная замена стекла (дисплея) на ipad mini 2 в Киеве. от 200 грн. Ремонт от 20 минут.",
    keywords: "Замена стекла ipad mini 2, замена экрана ipad mini2, Киев, замена дисплея ipad mini2, экрана",
    menuActive: 'ipad'
  });
});

//======================
//    iPad mini 3
//======================

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

router.get('/remont-ipad-mini3/zamena-batarei', function (req, res, next) {
  res.render('pages/ipads/ipadmini3/zamena-batarei', {
    title: "Замена батареи (аккумулятора) ipad mini3 в Киеве | Service-iPhone",
    description: "Сломалась батарея на ipad mini 3? СЦ Service-iPhone в Киеве делает поможет заменить аккумулятор в айпад мини 3",
    keywords: "Замена батареи ipad mini 3, Киев, ремонт аккумулятора ipad mini 3, замена батареи айпад mini 3",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad-mini3/zamena-ekrana', function (req, res, next) {
  res.render('pages/ipads/ipadmini3/zamena-ekrana', {
    title: "Замена экрана (дисплея) ipad mini3 в Киеве | Service-iPhone",
    description: "Качественная замена экрана (дисплея) на ipad mini 3 в Киеве. Цены от 200 грн. Время на ремонт от 20 минут.",
    keywords: "Замена дисплея ipad mini 3, замена экрана ipad mini 3, Киев, замена дисплея айпад mini 3, экрана",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad-mini3/zamena-stekla', function (req, res, next) {
  res.render('pages/ipads/ipadmini3/zamena-stekla', {
    title: "Замена стекла (тачскрина) ipad mini 3 в Киеве | Service-ipad",
    description: "Качественная замена стекла (дисплея) на ipad mini3 в Киеве. от 200 грн. Ремонт от 20 минут.",
    keywords: "Замена стекла ipad mini 3, замена экрана ipad mini 3, Киев, замена дисплея ipad mini 3, экрана",
    menuActive: 'ipad'
  });
});


//======================
//    iPad mini 4
//======================

router.get('/remont-ipad-mini4', function (req, res, next) {
  req.db['ipadmini4'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/ipads/ipad-mini4', {
      title: "Ремонт iPad mini 4 | Замена стекла iPad mini 4 | Service-iPhone",
      description: "Service-iPhone делает Ремонт iPad mini 4: Замену стекла на айпад мини 4, дисплея, батерии. ",
      keywords: "Ремонт iPad mini 4, замена стекла iPad mini 4",
      menuActive: 'ipad',
      pricesTable: docs
    });
  });
});


//======================
//    iPad Pro 9.7
//======================

router.get('/remont-ipad-pro-9', function (req, res, next) {
  req.db['ipadipadpro97'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/ipads/ipad-pro97', {
      title: "Ремонт iPad Pro 9.7 | Замена стекла iPad Pro 9.7 | Service-iPhone",
      description: "Service-iPhone делает Ремонт iPad Pro 9.7 : Замену стекла на айпад про 9.7 от 9999грн ",
      keywords: "Ремонт iPad Pro 9.7 , замена стекла iPad Pro 9.7 ",
      menuActive: 'ipad',
      pricesTable: docs
    });
  });
});

//======================
//    iPad Pro 12.9
//======================

router.get('/remont-ipad-pro-12', function (req, res, next) {
  req.db['ipadipadpro129'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/ipads/ipad-pro129', {
      title: "Ремонт iPad Pro 12.9 | Замена стекла iPad Pro 12.9 | Service-iPhone",
      description: "Service-iPhone делает Ремонт iPad Pro 12.9: Замену стекла на айпад про 12.9. Замена дисплея от 10999грн ",
      keywords: "Ремонт iPad Pro 12.9, замена стекла iPad Pro 12.9",
      menuActive: 'ipad',
      pricesTable: docs
    });
  });
});



module.exports = router;
