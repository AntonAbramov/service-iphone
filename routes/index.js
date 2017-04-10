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
    title: "Сервисный центр Apple - Ремонт Apple | Киев и вся Укрина | Service-iPhone",
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
    title: "Контакты Офисов: м. Золотые Ворота | м. Олимпийская | м. Минская",
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
    description: "Ремонт вашего macbook pro в Киеве с гарантией до 6 месяцев, сделает наш Service-iPhone центр! Телефон для справок - (067) 301-12-21",
    keywords: "Ремонт MacBook Pro",
    menuActive: 'imac'
  });
});

router.get('/remont-macbook-air', function (req, res, next) {
  res.render('pages/mac/macbook-air', {
    title: "Ремонт MacBook Air в Киеве | Service-iPhone",
    description: "Недорогой ремонт macbook air с гарантией до 6 месяцев, произведет сервисный центр Service-iPhone! Киев и вся Украина",
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
    title: "Что делать если не работает кнопка Home на iPhone?",
    description: "Когда у вас перестала работать кнопка Home, попробуйте перезагрузить устройво. Если же это было механическое воздействие, тогда необходимо обратиться в СЦ.",
    keywords: "не работает кнопка Home iPhone, iPad"
  });
});

router.get('/iphone-ne-rabotaet-mikrofon', function (req, res, next) {
  res.render('pages/problems/iphone-ne-rabotaet-mikrofon', {
    title: "Не работает микрофон в iPhone | Советы от Service-iPhone",
    description: "Что делать когда у вашего смартфона не работает микрофон. Service-iPhone поможет вам починить микрофон и динамик! ☎︎ (093) 421-12-21",
    keywords: "iphone не работает микрофон"
  });
});

router.get('/iphone-ne-vklyuchaetsya', function (req, res, next) {
  res.render('pages/problems/iphone-ne-vklyuchaetsya', {
    title: "Не включается iPhone? Несколько советов от Apple Сервиса",
    description: "Возможно на вашем iPhone разрядилась батарея, попробуйте поставить телефон на зарядку. Более детальную информацию смотрите на нашем сайте. ",
    keywords: "не включается iPhone"
  });
});

router.get('/iphone-ne-zaryazhaetsya', function (req, res, next) {
  res.render('pages/problems/iphone-ne-zaryazhaetsya', {
    title: "Что делать когда не заряжается iPhone? | Service-iPhone",
    description: "Если у вас не заряжается iPhone, попробуйте поменять кабель зарядки, если проблема не будет решена рекомендуем сделать диагностику.!",
    keywords: "не заряжается iPhone"
  });
});


router.get('/ne-nazhimayutsya-knopki-na-iphone', function (req, res, next) {
  res.render('pages/problems/ne-nazhimayutsya-knopki-na-iphone', {
    title: "Не нажимается кнопка Home на iPhone | Service-iPhone",
    description: "Когда не работает кнопка Home, попробуйте сделать следующее: 1) перезагрузить устройство. 2) Сбросить настройки до заводских. 3) Больше информации у нас на сайте",
    keywords: "Не нажимается кнопка Home на iphone"
  });
});

router.get('/ne-rabotaet-displey-iphone', function (req, res, next) {
  res.render('pages/problems/ne-rabotaet-displey-iphone', {
    title: "Не работает дисплей на iPhone или iPad | Service-iPhone.com.ua",
    description: "Замена дисплея стоит от 399грн и по времени занимает 20 минут.",
    keywords: "Не работает дисплей"
  });
});

router.get('/ne-rabotaet-tachskrin-na-iphone', function (req, res, next) {
  res.render('pages/problems/ne-rabotaet-tachskrin-na-iphone', {
    title: "Не работает тачскрин | Service-iPhone.com.ua",
    description: "Замена touchscreen в Service-iPhone занимает от 20 минут, и стоит от 399 грн.",
    keywords: "не работает тачскрин, touchscreen"
  });
});

router.get('/ne-rabotaet-vibrozvonok', function (req, res, next) {
  res.render('pages/problems/ne-rabotaet-vibrozvonok', {
    title: "Не работает виброзвонок на iPhone, вибрация не работает",
    description: "Когда перестала работать вибрация, не спешите отдавать телефон в ремонт, проверьте сперва заводские настройки.",
    keywords: "iphone не работает вибро звонок, iphone ремонт вибро "
  });
});

router.get('/ne-rabotaet-zvuk-na-iphone', function (req, res, next) {
  res.render('pages/problems/ne-rabotaet-zvuk-na-iphone', {
    title: "Не работает звук, Пропал звук на iPhone | Service-iPhone",
    description: "Несколько вариантов, как вы можете проверить динамик самостоятельно. Более детальную информацию смотрите нашем сайте.",
    keywords: "не работает звука iphone"
  });
});

router.get('/razbilos-steklo-iphone', function (req, res, next) {
  res.render('pages/problems/razbilos-steklo-iphone', {
    title: "Качественная замена стекла iPhone в Киеве | Service-iPhone",
    description: "Быстрая замена стекла на iPhone в Киеве ✓ Низские цены ✓ 100% гарантия ✪ телефон ☎︎ (093) 421-12-21",
    keywords: "замена стекла iPhone, починить стекло на айфоне"
  });
});

router.get('/voda-iphone', function (req, res, next) {
  res.render('pages/problems/voda-iphone', {
    title: "В iPhone попала вода | Способы решение проблемы | Service-iPhone",
    description: "Если попала вода в iPhone, не спешите включать его. Сервисный центр iPhone рекомендует просушить устройство, а лучше всего предоставить это дело професионалам.",
    keywords: "iphone попала вода"
  });
});

router.get('/wifi-ne-rabotaet', function (req, res, next) {
  res.render('pages/problems/wifi-ne-rabotaet', {
    title: "Что делать когда wi-fi перестал работать? | Рекомендации о том как можно улучшить сигнал вашего устройства",
    description: "Когда wi-fi не ловит, попробуйте включить режим полета, и через 15 секунд выключить. Если это не помогло, то попробуйте перезагрузить устройсво.",
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
