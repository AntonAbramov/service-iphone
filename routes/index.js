var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'scotishkitten@gmail.com',
    pass: 'absmart888'
  }
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: "Сервисный центр в Киеве - Ремонт техники Apple | Service-iPhone",
    description: "Срочный ремонт техники Apple в Киеве. Все виды работ включая замену стекла/экрана, реанимируем вашу батарею, почистим после воды",
    keywords: "сервисный центр apple, Киев, ремонт iphone, сервис apple, ремонт Apple, ремонт apple киев, apple ремонт"
  });
});

router.get('/warranty', function (req, res, next) {
  res.render('pages/warranty/warranty', {
    title: "Гарантия 6 месяцев от Service-iPhone.com.ua ",
    description: "Наш сервисный центр предоставляет гарантию до 6 месяцев, на все виды ремонтов техники Apple | ремонт iphone ipad macbook ipod",
    keywords: "ремонт iPhone, iPad, iPod, Macbook, Киев, Сервисный центр Apple "
  });
});


router.get('/remont-iphone3g', function (req, res, next) {

  var db = req.db;
  var collection = db.get('iphone3').find({}, {}, function(e, docs) {
    res.render('pages/iphones/iphone3', {
      title: "Ремонт iPhone 3G в Киеве | Сервисный центр Apple - Service-iPhone",
      description: "Наш Сервис сделает качественный ремонт iPhone 3gs в Киеве с гарантией. Все виды работ включая замену стекла/экрана, реанимируем вашу батарею, почистим после воды",
      keywords: "ремонт iphone 3gs, киев, ремонт айфона 3gs, замена стекла iphone 3gs",
      data: docs,
      menuActive: 'iphone'
    });
  });
});

router.get('/remont-iphone5', function (req, res, next) {
  res.render('pages/iphones/iphone5', {
    title: "Ремонт iPhone 5 в Киеве | Сервисный центр Apple - Service-iPhone",
    description: "В нашем СЦ сделают быстрый ремонт iPhone 5. Замена стекла, экрана, аккумулятора в течении суток!",
    keywords: "Ремонт iPhone 5, ремонт айфона 5, Киев, замена стекла, дисплея, экрана, ремонт аккумулятора, батареи",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6', function (req, res, next) {
  res.render('pages/iphones/iphone6', {
    title: "Ремонт iPhone 6 в Киеве | Сервисный центр Apple - Service-iPhone",
    description: "Требуется ремонт iphone 6? Мы вам поможем, проведем бесплатную диагностику и качественно сделаем ремонт iphone 6 в Киеве",
    keywords: "Ремонт iPhone 6, Киев, замена стекла, экрана, дисплея",
      menuActive: 'iphone'
  });
});

router.get('/remont-iphone4', function (req, res, next) {
  res.render('pages/iphones/iphone4', {
    title: "Ремонт iPhone 4 в Киеве | Сервисный центр Apple - Service-iPhone",
    description: "На СЦ делает замену стекла, дисплея, кнопок, аккумулятора с гарантией. Не работает iPhone 4? - мы вам поможем .",
    keywords: "Ремонт iPhone 4, ремонт айфона 4, Киев, замена стекла iPhone 4",
      menuActive: 'iphone'
  });
});

router.get('/remont-iphone4s', function (req, res, next) {
  res.render('pages/iphones/iphone4s', {
    title: "Ремонт iPhone 4s",
    description: "Service-iphone сделает качественный ремонт iphone 4s в Киеве с гарантией не менее 6 месяцев. Замена батареи, аккумулятора, стекла/экрана.",
    keywords: "Ремонт iPhone 4s, ремонт айфона 4s, Киев, замена стекла iPhone 4s",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-5c', function (req, res, next) {
  res.render('pages/iphones/iphone5c', {
    title: "Ремонт iPhone 5c в Киеве | Сервисный центр Apple - Service-iPhone",
    description: "В СЦ Service-iphone сделают быстро и качественно ремонт вашего iphone 5c в Киеве! Замена экрана, дисплея за 30 минут.",
    keywords: "Ремонт iPhone 5c, замена батареи, аккумулятора, дисплея",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-5s', function (req, res, next) {
  res.render('pages/iphones/iphone5s', {
    title: "Ремонт iPhone 5s в Киеве | Сервисный центр Apple - Service-iPhone",
    description: "Срочный ремонт iPhone 5s в Service-iPhone. Постоянное наличие оригинальных запчастей для замены стекла и экрана iPhone 5s.",
    keywords: "Ремонт iPhone 5s, Киев, замена дисплея, экрана, стекла, ремонт после воды",
    menuActive: 'iphone'
  });
});



router.get('/remont-iphone-6plus', function (req, res, next) {
  res.render('pages/iphones/iphone6plus', {
    title: "Ремонт iPhone 6+ в Киеве | Сервисный центр Apple - Service-iPhone",
    description: "Iphone 6+ ремонт/замента стекла/дисплея/джойстика/аккумулятора. Замена стекла/батареи/дисплея.",
    keywords: "Ремонт iPhone 6+, Киев, замена экрана, дисплея, стекла, ремонт аккумулятора",
    menuActive: 'iphone'
  });
});

router.get('/remont-ipad2', function (req, res, next) {
  res.render('pages/ipads/ipad2', {
    title: "Ремонт iPad 2 в Киеве | Сервисный центр Apple - Service-iPhone",
    description: "Срочный ремонт ipad 2 быстро и качественно, используем только оригинальные детали. Даем гарантию 2 года",
    keywords: "Ремонт iPad 2, не заряжается, замена аккумулятора, стекла, экрана",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad3', function (req, res, next) {
  res.render('pages/ipads/ipad3', {
    title: "Ремонт iPad 3 в Киеве | Сервисный центр Apple - Service-iPhone",
    description: "Service-iphone делает ремонт быстро и качественно с гарантией 2 года, мы починим ваш ipad 3!",
    keywords: "Ремонт iPad 3, ремонт после воды, замена стекла, экрана, дисплея, батареии",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad4', function (req, res, next) {
  res.render('pages/ipads/ipad4', {
    title: "Ремонт iPad 4 в Киеве | Сервисный центр Apple - Service-iPhone",
    description: "Цены на ремонт iPad 4 в городе Киеве, Service-iPhone заменит стекло/тачскрин/батарею/wifi и другие детали вашего дивайса!",
    keywords: "Ремонт iPad 4, замена батареии, стекла, дисплея",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad-air', function (req, res, next) {
  res.render('pages/ipads/ipad-air', {
    title: "Ремонт iPad air в Киеве | Сервисный центр Apple - Service-iPhone",
    description: "Быстрый сервис по ремонту iPad air в городе Киеве - Service-iPhone, цены на ремонт вашего ipad air.",
    keywords: "Ремонт iPad air, ремонт батареии, экрана, кнопки iHome",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad-air2', function (req, res, next) {
  res.render('pages/ipads/ipad-air2', {
    title: "Ремонт iPad air 2 в Киеве | Сервисный центр Apple - Service-iPhone",
    description: "Самый лучший сервис по ремонту iPad air 2 в городе Киеве - Service-iPhone, цены на ремонт вашего iPad Air 2.",
    keywords: "Ремонт iPad Air 2",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad-mini', function (req, res, next) {
  res.render('pages/ipads/ipad-mini', {
    title: "Ремонт iPad mini в Киеве | Сервисный центр Apple - Service-iPhone",
    description: "Ремонт iPad mini в Киеве. Профессиональный ремонт iPad mini с гарантией до 2х лет. Только original запчасти.",
    keywords: "Ремонт iPad mini",
    menuActive: 'ipad'
  });
});
router.get('/remont-ipad-mini2', function (req, res, next) {
  res.render('pages/ipads/ipad-mini2', {
    title: "Ремонт iPad mini2 в Киеве | Сервисный центр Apple - Service-iPhone",
    description: "Ремонт iPad mini 2 в Киеве. Профессиональный ремонт iPad mini с гарантией до 2х лет. Цены на ремонт ipad mini 2.",
    keywords: "Ремонт iPad mini2",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad-mini3', function (req, res, next) {
  res.render('pages/ipads/ipad-mini3', {
    title: "Ремонт iPad mini3 в Киеве | Сервисный центр Apple - Service-iPhone",
    description: "Ремонт iPad mini 3 в Киеве. Профессиональный ремонт iPad mini с гарантией до 2х лет. Цены на ремонт ipad mini 3.",
    keywords: "Ремонт iPad mini3",
    menuActive: 'ipad'
  });
});

router.get('/remont-imac', function (req, res, next) {
  res.render('pages/mac/mac', {
    title: "Ремонт MacBook в Киеве | Сервисный центр Apple - Service-iPhone",
    description: "Ремонт MacBook в Киеве. Профессиональный ремонт MacBook с гарантией до 2х лет. Только original запчасти.",
    keywords: "Ремонт MacBook",
    menuActive: 'imac'
  });
});

router.get('/remont-macbook-pro', function (req, res, next) {
  res.render('pages/mac/macbook-pro', {
    title: "Ремонт MacBook Pro в Киеве | Сервисный центр Apple - Service-iPhone",
    description: "Ремонт вашего macbook pro в городе киеве с гарантией до 6 месяцев, сделает наш Service-Iphone центр!",
    keywords: "Ремонт MacBook Pro",
    menuActive: 'imac'
  });
});

router.get('/remont-macbook-air', function (req, res, next) {
  res.render('pages/mac/macbook-air', {
    title: "Ремонт MacBook Air в Киеве | Сервисный центр Apple - Service-iPhone",
    description: "Качественный ремонт macbook air в городе киеве с гарантией до 6 месяцев, сделает наш Service-Iphone центр!",
    keywords: "Ремонт MacBook Air",
    menuActive: 'imac'
  });
});

router.get('/iphone-byistro-razryazhaetsya', function (req, res, next) {
  res.render('pages/problems/iphone-byistro-razryazhaetsya', {
    title: "Что делать если iPhone быстро разряжается?",
    description: "Что делать если iphone быстро разряжается? В нашем СЦ подскажут как продлить жизнь вашей батареи!",
    keywords: "iPhone быстро разряжается"
  });
});

router.get('/iphone-ne-nazhimayutsya-knopki', function (req, res, next) {
  res.render('pages/problems/iphone-ne-nazhimayutsya-knopki', {
    title: "iPhone не нажимается кнопка iHome",
    description: "Если у вас не нажимается кнопка reset, что нужно делать? наш сервисный центр Service-Iphone поможет сделать ремонт быстро и дешево!",
    keywords: "iphone не нажимается кнопка"
  });
});

router.get('/iphone-ne-rabotaet-mikrofon', function (req, res, next) {
  res.render('pages/problems/iphone-ne-rabotaet-mikrofon', {
    title: "Iphone не работает микрофон",
    description: "Что делать когда у вашего смартфона не работает микрофон. Service-Iphone поможет вам починить микрофон и динамик!",

    keywords: "iphone не работает микрофон"
  });
});

router.get('/iphone-ne-vklyuchaetsya', function (req, res, next) {
  res.render('pages/problems/iphone-ne-vklyuchaetsya', {
    title: "Не включается iPhone",
    description: "Service-iPhone в городе Киеве, сделает ремонт вашего телефона быстро, с гарантией до 6 месяцев, оригинальные детали.",

    keywords: "не ключается iPhone"
  });
});

router.get('/iphone-ne-zaryazhaetsya', function (req, res, next) {
  res.render('pages/problems/iphone-ne-zaryazhaetsya', {
    title: "Не заряжается iPhone",
    description: "Если у вас не заряжается iPhone наш service-iphone сделает диагностику бессплатно, и поможет устранить неполадку!",
    keywords: "не заряжается iPhone"
  });
});


router.get('/ne-nazhimayutsya-knopki-na-iphone', function (req, res, next) {
  res.render('pages/problems/ne-nazhimayutsya-knopki-na-iphone', {
    title: "Не нажимается кнопка Home на iphone",
    description: "В iPhone не работает кнопка включения и блокировки",

    keywords: "Не нажимается кнопка Home на iphone"
  });
});

router.get('/ne-rabotaet-displey-iphone', function (req, res, next) {
  res.render('pages/problems/ne-rabotaet-displey-iphone', {
    title: "Iphone не работает дисплей",
    description: "Наш сервисный центр делает все виды ремонта техники Apple iphone/ipad/macbook/ipod.",
    keywords: "Iphone не работает дисплей"
  });
});

router.get('/ne-rabotaet-tachskrin-na-iphone', function (req, res, next) {
  res.render('pages/problems/ne-rabotaet-tachskrin-na-iphone', {
    title: "iPhone не работает тачскрин ",
    description: "",
    keywords: "ремонт тачскрин iphone Киев, iPhone не работает тачскрин"
  });
});

router.get('/ne-rabotaet-vibrozvonok', function (req, res, next) {
  res.render('pages/problems/ne-rabotaet-vibrozvonok', {
    title: "Не работает виброзвонок на афйон | iphone вибрация",
    description: "Service-iPhone делает любой сложности ремонт, ",
    keywords: "iphone не работает вибро, iphone ремонт вибро "
  });
});

router.get('/ne-rabotaet-zvuk-na-iphone', function (req, res, next) {
  res.render('pages/problems/ne-rabotaet-zvuk-na-iphone', {
    title: "Не работает звук iphone | Service-Iphone",
    description: "Не работает звук iphone | Service-Iphone",
    keywords: "ремонт звука iphone киев"
  });
});

router.get('/razbilos-steklo-iphone', function (req, res, next) {
  res.render('pages/problems/razbilos-steklo-iphone', {
    title: "разбилось стелко iphone | ремонт Service-iPhone",
    description: "Service iPhone поможет вам сделать быстро и качественно из оригинальный деталей ремонт вашего iphone",
    keywords: "ремонт стекло айфон, разбилось стекло iphone"
  });
});
router.get('/voda-iphone', function (req, res, next) {
  res.render('pages/problems/voda-iphone', {
    title: "Попала вода на iphone | Service-Iphone ремонт техники apple",
    description: "Если попала вода в ваш телефон, нас сервисный центр по ремонту техники apple поможет сделать ремонт.",
    keywords: "ремон iphone после воды"
  });
});

router.get('/wifi-ne-rabotaet', function (req, res, next) {
  res.render('pages/problems/wifi-ne-rabotaet', {
    title: "Wifi не работает | Service-Iphone ремонт техники apple",
    description: "Что делать если wifi перестал работать? | Service-iPhone сделает ремонт вашего телефона",
    keywords: "Wifi не работает, Ремонт iPhone, iPad, Киев"
  });
});


router.post('/call-courier', function(req,res, next) {
  transporter.sendMail({
    from: 'scotishkitten@gmail.com',
    to: 'antonabramov1990@gmail.com, garkavkaalexandr@gmail.com',
    subject: 'Заказ Курьера!',
    text: '\nName: ' + req.body.name + '\nEmail: ' + req.body.tel + '\nText: ' + req.body.msg
  }, function(error, response){
    if(error){
      res.send('error');
    }else{
      res.send('success');
    }
  });
})


// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols


module.exports = router;
