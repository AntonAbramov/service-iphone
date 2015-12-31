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
    keywords: "сервисный центр apple, Киев, ремонт iphone, сервис apple, ремонт Apple, ремонт apple киев, apple ремонт",
    vkontakte: true
  });
});

router.get('/warranty', function (req, res, next) {
  res.render('pages/warranty/warranty', {
    title: "Гарантия 6 месяцев от Service-iPhone.com.ua ",
    description: "Наш сервисный центр предоставляет гарантию до 6 месяцев, на все виды ремонтов техники Apple | ремонт iphone ipad macbook ipod",
    keywords: "ремонт iPhone, iPad, iPod, Macbook, Киев, Сервисный центр Apple ",
    menuActive: 'warranty'
  });
});

router.get('/contacts', function (req, res, next) {
  res.render('pages/contacts/contacts', {
    title: "Контакты Сервисного центра Service-iPhone по ремонту iPhone, iPad, MacBook",
    description: "На этой странице вы найдете телефоны и адресса наших сервисных центров в городе Киеве.",
    keywords: "Киев Сервисный центр Apple, Контакты service-iPhone, ремонт iPhone, Киев, Сервисный центр Apple",
    menuActive: 'contacts'
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


router.post('/call-courier', function (req, res, next) {

  transporter.sendMail({
    from: 'scotishkitten@gmail.com',
    to: 'anton@juniqe.com, garkavkaalexandr@gmail.com',
    //to: 'antonabramov1990@gmail.com',
    subject: (req.body.info) ? 'Перезвонить срочно!' : 'Заказ Курьера!',
    text: '\nName: ' + req.body.name + '\nКонтакт: ' + req.body.tel + '\nText: ' + req.body.msg + '\nИнфо: ' + req.body.info
  }, function (error, response) {
    if (error) {
      res.send('error');
    } else {
      res.send('success');
    }
  });
})


// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols


module.exports = router;
