var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'scotishkitten@gmail.com',
    pass: ''
  }
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: "Ремонт Apple техники: iPhone iPad MacBook iMac",
    description: "Срочный ремонт Apple iPhone в Киеве. Замена стекла от 200 грн, дисплея от 300 грн, ремонт после воды.",
    keywords: "Ремонт iPhone iPad iPod Macbook"
  });
});

router.get('/warranty', function (req, res, next) {
  res.render('pages/warranty/warranty', {
    title: "Гарантия 6 месяцев от Service-Iphone.com.ua ",
    description: "Наш сервисный центр предоставляет гарантию до 2 лет, на все виды ремонтов техники Apple | ремонт iphone ipad macbook ipod",
    keywords: "ремонт iPhone iPad iPod Macbook"
  });
});


router.get('/remont-iphone3g', function (req, res, next) {

  var db = req.db;
  var collection = db.get('iphone3').find({}, {}, function(e, docs) {
    res.render('pages/iphones/iphone3', {
      title: "Ремонт iPhone 3G",
      description: "Наш Сервис сделает качественный ремонт iPhone 3g в Киеве с гарантией. Так же делаем ремонт всех моделей iphone.",
      keywords: "ремонт iphone 3gs киев, айфон 3g ремонт, iphone 3g ремонт",
      data: docs,
      menuActive: 'iphone'
    });
  });
});

router.get('/remont-iphone4', function (req, res, next) {
  res.render('pages/iphones/iphone4', {
    title: "Ремонт iPhone 4",
    description: "Service-iphone сделает качественный ремонт iphone 4 в Киеве с гарантией до 2 лет. Замена стекла, дисплея, кнопки.",
    keywords: "Ремонт iPhone 4",
      menuActive: 'iphone'
  });
});

router.get('/remont-iphone4s', function (req, res, next) {
  res.render('pages/iphones/iphone4s', {
    title: "Ремонт iPhone 4s",
    description: "Service-iphone сделает качественный ремонт iphone 4s в Киеве с гарантией не менее 2 лет. Замена батареи, аккумулятора, кнопки.",
    keywords: "Ремонт iPhone 4s",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5', function (req, res, next) {
  res.render('pages/iphones/iphone5', {
    title: "Ремонт iPhone 5",
    description: "Быстрый ремонт iPhone5 в городе Киев. Диагностика iPhone 5/5s/6/6+ бессплатно!",
    keywords: "Ремонт iPhone 5",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-5c', function (req, res, next) {
  res.render('pages/iphones/iphone5c', {
    title: "Ремонт iPhone 5c",
    description: "Service-iphone сделает быстро и качественно ремонт вашего iphone 5c в Киеве в тот же день!.",
    keywords: "Ремонт iPhone 5c",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-5s', function (req, res, next) {
  res.render('pages/iphones/iphone5s', {
    title: "Ремонт iPhone 5s ",
    description: "Киев ремонт и сервис iPhone 5s. Цены на iphone 5s указаны на странице. Цены на ремонт iphone 5s",
    keywords: "Ремонт iPhone 5s",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6', function (req, res, next) {
  res.render('pages/iphones/iphone6', {
    title: "Ремонт iPhone 6",
    description: "Требуется ремонт iphone 6? мы вам поможем, сделаем быстро и качественно ремонт iphone 4/4s/5/5s/6/6+",
    keywords: "Ремонт iPhone 6",
      menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6plus', function (req, res, next) {
  res.render('pages/iphones/iphone6plus', {
    title: "Ремонт iPhone 6+ ",
    description: "Iphone 6+ ремонт/замента стекла/дисплея/джойстика/аккумулятора. Замена стекла/батареи/дисплея.",
    keywords: "Ремонт iPhone 6+",
    menuActive: 'iphone'
  });
});

router.get('/remont-ipad2', function (req, res, next) {
  res.render('pages/ipads/ipad2', {
    title: "Ремонт iPad 2",
    description: "Срочный ремонт ipad 2 быстро и качественно, используем только оригинальные детали. Даем гарантию 2 года",
    keywords: "Ремонт iPad 2",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad3', function (req, res, next) {
  res.render('pages/ipads/ipad3', {
    title: "Ремонт iPad 3",
    description: "Service-iphone делает ремонт быстро и качественно с гарантией 2 года, мы починим ваш ipad 3!",
    keywords: "Ремонт iPad 3",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad4', function (req, res, next) {
  res.render('pages/ipads/ipad4', {
    title: "Ремонт iPad 4",
    description: "Цены на ремонт iPad 4 в городе Киеве, Service-iPhone заменит стекло/тачскрин/батарею/wifi и другие детали вашего дивайса!",
    keywords: "Ремонт iPad 4",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad-air', function (req, res, next) {
  res.render('pages/ipads/ipad-air', {
    title: "Ремонт iPad air",
    description: "Самый лучший сервис по ремонту iPad air в городе Киеве - Service-iPhone, цены на ремонт вашего ipad air.",
    keywords: "Ремонт iPad air",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad-air2', function (req, res, next) {
  res.render('pages/ipads/ipad-air2', {
    title: "Ремонт iPad air 2",
    description: "Самый лучший сервис по ремонту iPad air 2 в городе Киеве - Service-iPhone, цены на ремонт вашего iPad Air 2.",
    keywords: "Ремонт iPad Air 2",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad-mini', function (req, res, next) {
  res.render('pages/ipads/ipad-mini', {
    title: "Ремонт iPad mini",
    description: "Ремонт iPad mini в Киеве. Профессиональный ремонт iPad mini с гарантией до 2х лет. Только original запчасти.",
    keywords: "Ремонт iPad mini",
    menuActive: 'ipad'
  });
});
router.get('/remont-ipad-mini2', function (req, res, next) {
  res.render('pages/ipads/ipad-mini2', {
    title: "Ремонт iPad mini2",
    description: "Ремонт iPad mini 2 в Киеве. Профессиональный ремонт iPad mini с гарантией до 2х лет. Цены на ремонт ipad mini 2.",
    keywords: "Ремонт iPad mini2",
    menuActive: 'ipad'
  });
});

router.get('/remont-ipad-mini3', function (req, res, next) {
  res.render('pages/ipads/ipad-mini3', {
    title: "Ремонт iPad mini3",
    description: "Ремонт iPad mini 3 в Киеве. Профессиональный ремонт iPad mini с гарантией до 2х лет. Цены на ремонт ipad mini 3.",
    keywords: "Ремонт iPad mini3",
    menuActive: 'ipad'
  });
});

router.get('/remont-imac', function (req, res, next) {
  res.render('pages/mac/mac', {
    title: "Ремонт MacBook",
    description: "Ремонт MacBook в Киеве. Профессиональный ремонт MacBook с гарантией до 2х лет. Только original запчасти.",
    keywords: "Ремонт MacBook",
    menuActive: 'imac'
  });
});

router.get('/remont-macbook-pro', function (req, res, next) {
  res.render('pages/mac/macbook-pro', {
    title: "Ремонт MacBook Pro",
    description: "Ремонт вашего macbook pro в городе киеве с гарантией до 2 лет, сделает наш Service-Iphone центр!",
    keywords: "Ремонт MacBook Pro",
    menuActive: 'imac'
  });
});

router.get('/remont-macbook-air', function (req, res, next) {
  res.render('pages/mac/macbook-air', {
    title: "Ремонт MacBook Air",
    description: "Качественный ремонт macbook air в городе киеве с гарантией до 2 лет, сделает наш Service-Iphone центр!",
    keywords: "Ремонт MacBook Air",
    menuActive: 'imac'
  });
});

router.get('/iphone-byistro-razryazhaetsya', function (req, res, next) {
  res.render('pages/problems/iphone-byistro-razryazhaetsya', {
    title: "Ваш iPhone быстро разряжается",
    description: "",
    keywords: "iPhone быстро разряжается"
  });
});

router.get('/iphone-ne-nazhimayutsya-knopki', function (req, res, next) {
  res.render('pages/problems/iphone-ne-nazhimayutsya-knopki', {
    title: "iPhone не нажимается кнопка",
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
    description: "Service-iPhone в городе Киеве, сделает ремонт вашего телефона быстро, с гарантией до 2 лет, оригинальные детали.",

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
    description: "Ремонт iPhone iPad iPod Macbook | Service-iPhone делает только качественный ремонт",
    keywords: "Wifi не работает, Ремонт iPhone iPad iPod Macbook"
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
