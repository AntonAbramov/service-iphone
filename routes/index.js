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
    title: "Сервисный центр Apple - Ремонт Эпл | Киев и вся Укрина | Service-iPhone",
    description: "Срочный ремонт техники Apple в Киеве. Все виды работ включая замену стекла/экрана, реанимируем вашу батарею, почистим после воды",
    keywords: "сервисный центр apple, ремонт Apple",
    vkontakte: true
  });
});

router.get('/warranty', function (req, res, next) {
  res.render('pages/warranty/warranty', {
    title: "Гарантия до 6 месяцев на ремонт техники Apple | Service-iPhone",
    description: "Наш сервисный центр предоставляет гарантию до 6 месяцев, на все виды ремонтов техники Apple",
    keywords: "гарантия на ремонт apple",
    menuActive: 'warranty'
  });
});

router.get('/contacts', function (req, res, next) {
  res.render('pages/contacts/contacts', {
    title: "Наши офисы: м. Золотые Ворота | м. Олимпийская | м. Минская",
    description: "(096) 125-32-46 - ул. Богдана Хмелльницкого 32 офис 5 Киев, (095) 431-12-21 ул. Большая Васильковская 74 офис 2  ",
    keywords: "контакты, киев",
    menuActive: 'contacts'
  });
});

router.get('/politika-konfidenczialnosti', function (req, res, next) {
  res.render('pages/confidential/index', {
    title: "Политика конфиденциальности - Service-iPhone",
    description: "",
    keywords: "",
    menuActive: ''
  });
});

router.get('/otkaz-ot-otvetstvennosti', function (req, res, next) {
  res.render('pages/confidential/otkaz-ot-otvetstvennosti', {
    title: "Отказ от ответственности - Service-iPhone",
    description: "",
    keywords: "",
    menuActive: ''
  });
});

router.get('/soglasie-s-rassyilkoj', function (req, res, next) {
  res.render('pages/confidential/soglasie-s-rassyilkoj', {
    title: "Отказ от ответственности - Service-iPhone",
    description: "",
    keywords: "",
    menuActive: ''
  });
});





router.get('/remont-imac', function (req, res, next) {
  res.render('pages/imac/index', {
    title: "Ремонт iMac Киев и вся Украина | Service-iPhone",
    description: "В нашем сервисе вы получите бесплатную диагностику, качественный ремонт iMac. Тел. (093) 421-12-21.",
    keywords: "Ремонт iMac",
    menuActive: 'imac'
  });
});

router.get('/remont-macbook-pro', function (req, res, next) {
  res.render('pages/mac/macbook-pro', {
    title: "Ремонт MacBook Pro Киев и вся Украина от Service-iPhone",
    description: "Ремонт вашего macbook pro в городе киеве с гарантией до 6 месяцев, сделает наш Service-Iphone центр! Телефон для справок - (067) 301-12-21",
    keywords: "Ремонт MacBook Pro",
    menuActive: 'imac'
  });
});

router.get('/remont-macbook-air', function (req, res, next) {
  res.render('pages/mac/macbook-air', {
    title: "Ремонт MacBook Air в Киеве | Service-iPhone",
    description: "Недорогой ремонт macbook air с гарантией до 6 месяцев, произведет сервисный центр Service-Iphone! Киев и вся Украина",
    keywords: "Ремонт MacBook Air",
    menuActive: 'imac'
  });
});

router.get('/iphone-byistro-razryazhaetsya', function (req, res, next) {
  res.render('pages/problems/iphone-byistro-razryazhaetsya', {
    title: "11 Способов продлить работу вашей Батареии на iPhone | Service-iPhone",
    description: "Если у вас быстро разряжается iPhone, попробуйте сперва: 1) Отключить Службы геолокации. 2) Проверить Загру...",
    keywords: "iPhone быстро разряжается"
  });
});

router.get('/iphone-ne-nazhimayutsya-knopki', function (req, res, next) {
  res.render('pages/problems/iphone-ne-nazhimayutsya-knopki', {
    title: "Что делать если не работает кнопка Home на iPhone",
    description: "Когда у вас перестала работать кнопка Home, попробуйте сперва перезагрузить устройво. Если же это было механическое воздействие, тогда необходимо обратиться в СЦ.",
    keywords: "не работает кнопка Home iPhone, iPad"
  });
});

router.get('/iphone-ne-rabotaet-mikrofon', function (req, res, next) {
  res.render('pages/problems/iphone-ne-rabotaet-mikrofon', {
    title: "не работает микрофон у iPhone | Советы от Service-iPhone",
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
