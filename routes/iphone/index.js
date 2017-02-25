var express = require('express');
var router = express.Router();

router.get('/remont-iphone', function (req, res, next) {
  res.render('pages/landing', {
    title: "Ремонт iPhone & iPad в Киеве, цена на ремонт iPhone | Service-Iphone",
    description: "Бессплатная диагностика, быстрая доставка, качественный ремонт - это далеко не все положительные качества нашего Сервисного-Центра",
    keywords: "Ремонт iPhone Киев, ремонт iPad Киев, ремонт айфон, сервисный центр Apple Киев"
  });
});

router.get('/iphone', function (req, res, next) {
  res.render('pages/iphones/index', {
    title: "Ремонт iPhone в Киеве, Замена стекла на iPhone | Service-iPhone",
    description: "Замена стекла на iPhone от 299 грн. Service-iPhone предоставляет услуги ремонта iPhone. АКЦИИ & СКИДКИ. Комплексный ремонт - дешево.",
    keywords: "ремонт iphone, замена стекла на iPhone, ремонт айфона в Киеве",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone3g', function (req, res, next) {
  req.db['iphone3'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/iphones/iphone3', {
      title: "Ремонт iPhone 3G в Киеве | Сервисный центр Apple - Service-iPhone",
      description: "Ремонт iPhone 3G в сервисном центре Service-iPhone в Киеве. Замена стекла на айфон, экрана, дисплея. Умеренные цены на ремонт.",
      keywords: "ремонт iphone 3G, Киев, замена стекла на айфон 3g",
      menuActive: 'iphone',
      pricesTable: docs
    });
  });
});


//======================
//    iPhone 4
//======================
router.get('/remont-iphone4', function (req, res, next) {
  req.db['iphone4'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/iphones/iphone4', {
      title: "Ремонт iPhone 4, Замена стекла, дисплея на iPhone 4 в Киеве | Service-iPhone",
      description: "Заказать недорогой и качественный ремонт iPhone 4 с гарантией от профессионалов. Бесплатная диагностика, Оригинальные детали на ремонт iPhone 4.",
      keywords: "Ремонт iPhone 4, ремонт айфона 4, Киев, замена стекла iPhone 4, кнопок",
      menuActive: 'iphone',
      pricesTable: docs
    });
  });
});

router.get('/remont-iphone4/diagnostika', function (req, res, next) {
  res.render('pages/iphones/iphone4/diagnostika', {
    title: "Диагностика iPhone 4 в Киеве | Service-iPhone ремонт Айфон 4",
    description: "Бесплатная диагностика iPhone 4 в Киеве. В Service-iPhone профессионалы разберутся что случилось с Вашим Айфоном 4.",
    keywords: "Диагностика iphone 4, Киев, Даигностика айфон 4, Киев Диагностика iPhone 4",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/remnont-knopki-home', function (req, res, next) {
  res.render('pages/iphones/iphone4/remnont-knopki-home', {
    title: "Ремонт кнопки Home в iPhone 4 | Service-iPhone ремонт айфон 4",
    description: "Не работает кнопка Home на iPhone 4, мы проведем беслпатную диагностику в Киеве, и сделаем ремонт iphone 4 за 20 минут.",
    keywords: "Ремонт кнопки Home iPhone 4, замена кнопки home iphone 4, Киев, ремонт iHome iPhone 4",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/remont-knopki-vkluchenia', function (req, res, next) {
  res.render('pages/iphones/iphone4/remont-knopki-vkluchenia', {
    title: "Ремонт кнопки включения (блокировки) iPhone 4",
    description: "Когда перестала работать кнопка включения или блокирования в iphone 4, обращайтесь за бесплатной диагностикой в Service-iPhone в Киеве",
    keywords: "Ремонт кнопки включения iPhone 4, Киев, айфон 4, ремонт кнопки блокировки iphone 4 ",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/remont-knopok-gromkosti', function (req, res, next) {
  res.render('pages/iphones/iphone4/remont-knopok-gromkosti', {
    title: "Ремонт кнопок громкости iPhone 4 | Service-iPhone в Киеве",
    description: "не работают кнопки громкости в iphone 4? В Service-iPhone проведут бесплатную диагностику и скажут причину поломки за 20 минут.",
    keywords: "Ремонт кнопки громкостки iPhone 4, не работает кнопка звука айфон 4",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/zamena-batarei', function (req, res, next) {
  res.render('pages/iphones/iphone4/zamena-batarei', {
    title: "Замена батареи (аккумулятора) iPhone 4 в Киеве | Service-iPhone",
    description: "iPhone 4 быстро разряжается? Или не работает батарея? В Service-iPhone быстро найдут причину неполадки и сделают качественный ремонт",
    keywords: "Замена батареи iPhone 4, Киев, ремонт аккумулятора iphone 4, замена батареи айфон 4",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/zamena-dinamika', function (req, res, next) {
  res.render('pages/iphones/iphone4/zamena-dinamika', {
    title: "Замена полифонического динамика (buzzer) iPhone 4 | Service-iPhone",
    description: "Если перестал работать звук на iPhone 4, лучше обратиться за консультацией к специалистам. В нашем сервисном центре сделают бесплатную диагностику.",
    keywords: "Замена динамика iPhone 4 в Киеве, ремонт динамика iphone 4, замена динамика айфон 4",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/zamena-ekrana', function (req, res, next) {
  res.render('pages/iphones/iphone4/zamena-ekrana', {
    title: "Замена экрана (дисплея) iPhone 4 в Киеве | Service-iPhone",
    description: "Качественная замена экрана (дисплея) на iPhone 4 в Киеве. Цены от 200 грн. Время на ремонт 30 минут.",
    keywords: "Замена дисплея iphone 4, замена экрана iphone 4, Киев, замена дисплея айфон 4, экрана",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/zamena-front-camera', function (req, res, next) {
  res.render('pages/iphones/iphone4/zamena-front-camera', {
    title: "Замена фронтальной (передней) камеры iPhone 4 | Service-iPhone",
    description: "Ремонт фронтальной камеры в iPhone 4 занимает от 30 минут. В Service-iPhone делает качественный ремонт в городе Киеве",
    keywords: "Замена фронтальной камены iPhone 4, ремонт передней камеры iPhone 4, ремонт фронтальной камеры айфон 4, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/zamena-kameru', function (req, res, next) {
  res.render('pages/iphones/iphone4/zamena-kameru', {
    title: "Замена основной (задней) камеры iPhone 4 | Service-iPhone",
    description: "Не работает камера? Необходимо произвести диагностику дивайса, и заменить камеру. Наши специалисты делают замену камеры за считаные минуты.",
    keywords: "Замена основной камеры iPhone 4, ремонт камеры iPhone 4, замена камеры айфон 4, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/zamena-korpysa', function (req, res, next) {
  res.render('pages/iphones/iphone4/zamena-korpysa', {
    title: "Замена корпуса iPhone 4 в Киеве | Service-iPhone",
    description: "Разбили или полнули корпус iPhone 4? Не беда, наши специлисты быстро вылечат ваш айфон за 30 минут",
    keywords: "Замена корпуса iPhone 4, Замена корпуса айфон 4, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/zamena-microfona', function (req, res, next) {
  res.render('pages/iphones/iphone4/zamena-microfona', {
    title: "Замена микрофона iPhone 4 | Service-iPhone",
    description: "Не слышит собеседник? Что делать если вас не слышно? В Service-Iphone знают как решить эту проблему.",
    keywords: "Замена микрофона iPhone 4 в Киеве, Замена микрофона айфон 4, ремонт микрофона iphone 4",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/zamena-razgavornogo-dinamika', function (req, res, next) {
  res.render('pages/iphones/iphone4/zamena-razgavornogo-dinamika', {
    title: "Замена разговорного динамика iPhone 4 | Service-iPhone",
    description: "Пропал звук в айфон 4? Попробуйте перезагрузить телефон, если проблема не решиться необходимо делать диагностику устройства",
    keywords: "Замена разговорного динамика iPhone 4, Замена динамика айфон 4 в Киеве, Ремонт динамика iPhone 4",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/zamena-razjoma-dlja-naushnikov', function (req, res, next) {
  res.render('pages/iphones/iphone4/zamena-razjoma-dlja-naushnikov', {
    title: "Замена разъёма для наушников (аудиоджека) iPhone 4 | Service-iPhone",
    description: "Замена разьема для наушников в iPhone 4. В Service-iPhone устрнят даную неприятность за считаные минуты.",
    keywords: "Замена разъёма для наушников iPhone 4, Киев, ремонт айфон 4 разьем для наушников",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/zamena-stekla', function (req, res, next) {
  res.render('pages/iphones/iphone4/zamena-stekla', {
    title: "Замена стекла (тачскрина) iPhone 4 в Киеве | Service-iPhone",
    description: "Разбилось стекло на iPhone 4? Наш СЦ произведет быстро и качественно замену стекла на iPhone 4 за 749 грн.",
    keywords: "Замена стекла iphone 4, замена экрана iphone 4, Киев, замена дисплея iPhone 4, экрана",
    menuActive: 'iphone'
  });
});

//======================
//    iPhone 4s
//======================
router.get('/remont-iphone4s', function (req, res, next) {
  req.db['iphone4s'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/iphones/iphone4s', {
      title: "Ремонт iPhone 4s | Замена стекла iPhone 4s в Киеве | Service-iPhone",
      description: "Замена стекла/экрана, кнопки, батареи в серисном центре Service-iPhone пройдет быстро и недорого. Гаратия, АКЦИИ & СКИДКИ.",
      keywords: "Ремонт iPhone 4s, ремонт айфона 4s, Киев, замена стекла iPhone 4s",
      menuActive: 'iphone',
      pricesTable: docs
    });
  });
});

//======================
//    iPhone 5
//======================


router.get('/remont-iphone5', function (req, res, next) {
  req.db['iphone5'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/iphones/iphone5', {
      title: "Ремонт iPhone 5 | Замена стекла - 799 грн | Service-iPhone",
      description: "В нашем СЦ сделают быстрый ремонт iPhone 5. Замену стекла, экрана, батареи с гарантией! АКЦИИ & СКИДКИ - (096) 125-32-46",
      keywords: "Ремонт iPhone 5, ремонт айфон 5, Киев, замена стекла iphone 5, дисплея, батареи",
      menuActive: 'iphone',
      pricesTable: docs
    });
  });
});

router.get('/remont-iphone-5/zamena-stekla', function (req, res, next) {
  res.render('pages/iphones/iphone5/zamena-stekla', {
    title: "Замена стекла iPhone 5 в Киеве | Service-iPhone",
    description: "Service-iPhone делает замену стекла для iPhone 5 от 899грн в Киеве. Ремонт займет от 20 минут вашего времени",
    keywords: "Замена стекла iphone 5, замена экрана iphone 5, Киев, замена дисплея iPhone 5, экрана",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/diagnostika', function (req, res, next) {
  res.render('pages/iphones/iphone5/diagnostika', {
    title: "Диагностика iphone 5 в Киеве | Service-iPhone ремонт айфон 5",
    description: "Необходима диагностика iphone 5? Обращайтесь в Service-iphone за бесплатной консультацией - ул. Богдана Хмельницкого 32 тел: (096) 125-32-46(093) 722-91-56(066) 566-97-52",
    keywords: "Диагностика iphone 5, Киев, Даигностика айфон 5, Киев Диагностика iphone 5",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/remnont-knopki-home', function (req, res, next) {
  res.render('pages/iphones/iphone5/remnont-knopki-home', {
    title: "Ремонт кнопки Home в iphone 5 | Service-iPhone ремонт айфон 5",
    description: "Не работает кнопка Home на iphone 5, мы проведем беслпатную диагностику в Киеве, и сделаем ремонт iphone 5 за 20 минут.",
    keywords: "Ремонт кнопки Home iphone 5, замена кнопки home iphone 5, Киев, ремонт iHome iphone 5",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/remont-knopki-vkluchenia', function (req, res, next) {
  res.render('pages/iphones/iphone5/remont-knopki-vkluchenia', {
    title: "Ремонт кнопки включения (блокировки) iphone 5",
    description: "Когда перестала работать кнопка включения или блокирования в iphone 5, обращайтесь за бесплатной диагностикой в Service-iPhone в Киеве",
    keywords: "Ремонт кнопки включения iphone 5, Киев, айфон 5, ремонт кнопки блокировки iphone 5 ",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/remont-knopok-gromkosti', function (req, res, next) {
  res.render('pages/iphones/iphone5/remont-knopok-gromkosti', {
    title: "Ремонт кнопок громкости iphone 5 | Service-iPhone в Киеве",
    description: "не работают кнопки громкости в iphone 5? В Service-iPhone проведут бесплатную диагностику и скажут причину поломки за 20 минут.",
    keywords: "Ремонт кнопки громкостки iphone 5, не работает кнопка звука айфон 5",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/zamena-batarei', function (req, res, next) {
  res.render('pages/iphones/iphone5/zamena-batarei', {
    title: "Замена батареи (аккумулятора) iphone 5 в Киеве | Service-iPhone",
    description: "iPhone 5 быстро разряжается? Или не работает батарея в айфоне 5? В Service-iPhone быстро найдут причину неполадки и сделают качественный ремонт",
    keywords: "Замена батареи iphone 5, Киев, ремонт аккумулятора iphone 5, замена батареи айфон 5",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/zamena-dinamika', function (req, res, next) {
  res.render('pages/iphones/iphone5/zamena-dinamika', {
    title: "Замена полифонического динамика (buzzer) iphone 5 | Service-iPhone",
    description: "Если перестал работать звук на iphone 5, лучше обратиться за консультацией к специалистам. В нашем сервисном центре сделают бесплатную диагностику.",
    keywords: "Замена динамика iphone 5 в Киеве, ремонт динамика iphone 5, замена динамика айфон 5",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/zamena-ekrana', function (req, res, next) {
  res.render('pages/iphones/iphone5/zamena-ekrana', {
    title: "Замена экрана (дисплея) iphone 5 в Киеве | Service-iPhone",
    description: "Качественная замена экрана (дисплея) на iphone 5 в Киеве. Цены от 200 грн. Время на ремонт 30 минут.",
    keywords: "Замена дисплея iphone 5, замена экрана iphone 5, Киев, замена дисплея айфон 5, экрана",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/zamena-front-camera', function (req, res, next) {
  res.render('pages/iphones/iphone5/zamena-front-camera', {
    title: "Замена фронтальной (передней) камеры iphone 5 | Service-iPhone",
    description: "Ремонт фронтальной камеры в iphone 5 занимает от 30 минут. В Service-iPhone делает качественный ремонт в городе Киеве",
    keywords: "Замена фронтальной камены iphone 5, ремонт передней камеры iphone 5, ремонт фронтальной камеры айфон 5, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/zamena-kameru', function (req, res, next) {
  res.render('pages/iphones/iphone5/zamena-kameru', {
    title: "Замена основной (задней) камеры iphone 5 | Service-iPhone",
    description: "Замена основной камеры в iPhone 5. В Service-iPhone Работаю професионалы которые могут заменить камеру в айфоне 5 за считаные минуты.",
    keywords: "Замена основной камеры iphone 5, ремонт камеры iphone 5, замена камеры айфон 5, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/zamena-korpysa', function (req, res, next) {
  res.render('pages/iphones/iphone5/zamena-korpysa', {
    title: "Замена корпуса iphone 5 в Киеве | Service-iPhone",
    description: "Разбили или полнули корпус iphone 5? Не беда, наши специлисты быстро вылечат ваш айфон за 30 минут",
    keywords: "Замена корпуса iphone 5, Замена корпуса айфон 5, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/zamena-microfona', function (req, res, next) {
  res.render('pages/iphones/iphone5/zamena-microfona', {
    title: "Замена микрофона iphone 5 | Service-iPhone",
    description: "Не слышит собеседник? Что делать если вас не слышно? В Service-Iphone знают как решить эту проблему.",
    keywords: "Замена микрофона iphone 5 в Киеве, Замена микрофона айфон 5, ремонт микрофона iphone 5",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/zamena-razgavornogo-dinamika', function (req, res, next) {
  res.render('pages/iphones/iphone5/zamena-razgavornogo-dinamika', {
    title: "Замена разговорного динамика iphone 5 | Service-iPhone",
    description: "Попробуйте перезагрузить телефон, если проблема не решиться необходимо делать диагностику iphone 5 и возможно ремонт",
    keywords: "Замена разговорного динамика iphone 5, Замена динамика айфон 5 в Киеве, Ремонт динамика iphone 5",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/zamena-razjoma-dlja-naushnikov', function (req, res, next) {
  res.render('pages/iphones/iphone5/zamena-razjoma-dlja-naushnikov', {
    title: "Замена разъёма для наушников (аудиоджека) iphone 5 | Service-iPhone",
    description: "iPhone 5 замена разьема для наушников. В сервисном центре Apple устрнят даную неприятность за считаные минуты.",
    keywords: "Замена разъёма для наушников iphone 5, Киев, ремонт айфон 5 разьем для наушников",
    menuActive: 'iphone'
  });
});

//======================
//    iPhone 5c
//======================

router.get('/remont-iphone-5c', function (req, res, next) {
  req.db['iphone5c'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/iphones/iphone5c', {
      title: "Ремонт iPhone 5c в Киеве | Замена стекла айфон 5с | Service-iPhone",
      description: "Service-iPhone делаем качественный ремонт iPhone 5c с Гарантией. Замена стекна на айфон 5с от 30 мин. (093) 722-91-56",
      keywords: "Ремонт iPhone 5c, Замена стекла айфон 5с, батери, дисплея, Киев",
      menuActive: 'iphone',
      pricesTable: docs
    });
  });
});

//======================
//    iPhone 5s
//======================

router.get('/remont-iphone-5s', function (req, res, next) {
  req.db['iphone5s'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/iphones/iphone5s', {
      title: "Ремонт iPhone 5s | Замена стекла айфон 5s | Service-iPhone в Киеве",
      description: "Срочный ремонт iPhone 5s. Замена стекла на айфон 5s в Киеве - 799грн. АКЦИИ & СКИДКИ - (066) 566-97-52",
      keywords: "Ремонт iPhone 5s, замена стекла iphone 5s, ремонт айфон, Киев",
      menuActive: 'iphone',
      pricesTable: docs
    });
  });
});

//======================
//    iPhone 6
//======================

router.get('/remont-iphone-6', function (req, res, next) {
  req.db['iphone6'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/iphones/iphone6', {
      title: "Ремонт iPhone 6 | Замена стекла iPhone 6 | Service-iPhone",
      description: "Замена стекла на iPhone 6 - 1199 грн. Наш сервисный центр производит ремонт iphone 6 по низким ценам с гарантией.",
      keywords: "Ремонт iPhone 6, Киев, iphone 6 замена стекла",
      menuActive: 'iphone',
      pricesTable: docs
    });
  });
});

router.get('/remont-iphone-6/zamena-stekla', function (req, res, next) {
  res.render('pages/iphones/iphone6/zamena-stekla', {
    title: "Замена стекла iPhone 6 в Киеве | Service-iPhone",
    description: "Поменяем дисплей или стекло на iPhone 6 быстро и недорого. от 1399грн и 30 минут времени на замену.",
    keywords: "Замена стекла iphone 6, Киев, замена экрана iphone 6, экрана, замена стекла iphone 6 Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/diagnostika', function (req, res, next) {
  res.render('pages/iphones/iphone6/diagnostika', {
    title: "Диагностика iphone 6 в Киеве | Service-iPhone ремонт айфон 6",
    description: "СЦ - делает бесплатную диагностику для iphone 6 в Киеве. ул. Богдана Хмельницкого 32 тел: (096) 125-32-46(093) 722-91-56(066) 566-97-52",
    keywords: "Диагностика iphone 6, Киев, Даигностика айфон 6, Киев Диагностика iphone 6",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/remnont-knopki-home', function (req, res, next) {
  res.render('pages/iphones/iphone6/remnont-knopki-home', {
    title: "Ремонт кнопки Home в iphone 6 | Service-iPhone ремонт айфон 6",
    description: "Не работает кнопка Home на iphone 6, мы проведем беслпатную диагностику в Киеве, и сделаем ремонт iphone 6 за 20 минут.",
    keywords: "Ремонт кнопки Home iphone 6, замена кнопки home iphone 6, Киев, ремонт iHome iphone 6",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/remont-knopki-vkluchenia', function (req, res, next) {
  res.render('pages/iphones/iphone6/remont-knopki-vkluchenia', {
    title: "Ремонт кнопки включения (блокировки) iphone 6",
    description: "Когда перестала работать кнопка включения или блокирования в iphone 6, обращайтесь за бесплатной диагностикой в Service-iPhone в Киеве",
    keywords: "Ремонт кнопки включения iphone 6, Киев, айфон 6, ремонт кнопки блокировки iphone 6 ",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/remont-knopok-gromkosti', function (req, res, next) {
  res.render('pages/iphones/iphone6/remont-knopok-gromkosti', {
    title: "Ремонт кнопок громкости iphone 6 | Service-iPhone в Киеве",
    description: "не работают кнопки громкости в iphone 6? В Service-iPhone проведут бесплатную диагностику и скажут причину поломки за 20 минут.",
    keywords: "Ремонт кнопки громкостки iphone 6, не работает кнопка звука айфон 6",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/zamena-batarei', function (req, res, next) {
  res.render('pages/iphones/iphone6/zamena-batarei', {
    title: "Замена батареи (аккумулятора) iphone 6 в Киеве | Service-iPhone",
    description: "Сервисный центр Apple сделает замену батареи iPhone 5 в Киеве - не дорого и с гарантией ",
    keywords: "Замена батареи iphone 6, Киев, ремонт аккумулятора iphone 6, замена батареи айфон 6",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/zamena-dinamika', function (req, res, next) {
  res.render('pages/iphones/iphone6/zamena-dinamika', {
    title: "Замена полифонического динамика (buzzer) iphone 6 | Service-iPhone",
    description: "Если перестал работать звук на iphone 6, лучше обратиться за консультацией к специалистам. В нашем сервисном центре сделают бесплатную диагностику.",
    keywords: "Замена динамика iphone 6 в Киеве, ремонт динамика iphone 6, замена динамика айфон 6",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/zamena-ekrana', function (req, res, next) {
  res.render('pages/iphones/iphone6/zamena-ekrana', {
    title: "Замена экрана (дисплея) iphone 6 в Киеве | Service-iPhone",
    description: "Качественная замена экрана (дисплея) на iphone 6 в Киеве. Цены от 200 грн. Время на ремонт 30 минут.",
    keywords: "Замена дисплея iphone 6, замена экрана iphone 6, Киев, замена дисплея айфон 6, экрана",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/zamena-front-camera', function (req, res, next) {
  res.render('pages/iphones/iphone6/zamena-front-camera', {
    title: "Замена фронтальной (передней) камеры iphone 6 | Service-iPhone",
    description: "Ремонт фронтальной камеры в iphone 6 занимает от 30 минут. В Service-iPhone делает качественный ремонт в городе Киеве",
    keywords: "Замена фронтальной камены iphone 6, ремонт передней камеры iphone 6, ремонт фронтальной камеры айфон 6, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/zamena-kameru', function (req, res, next) {
  res.render('pages/iphones/iphone6/zamena-kameru', {
    title: "Замена основной (задней) камеры iphone 6 | Service-iPhone",
    description: "Бесплатная диагностика на iPhone 6 в случаи неработающей камеры. В Service-iPhone Работаю професионалы которые могут заменить камеру в айфон 6 за 20 мин.",
    keywords: "Замена основной камеры iphone 6, ремонт камеры iphone 6, замена камеры айфон 6, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/zamena-korpysa', function (req, res, next) {
  res.render('pages/iphones/iphone6/zamena-korpysa', {
    title: "Замена корпуса iphone 6 в Киеве | Service-iPhone",
    description: "Разбили или полнули корпус iphone 6? Не беда, наши специлисты быстро вылечат ваш айфон за 30 минут",
    keywords: "Замена корпуса iphone 6, Замена корпуса айфон 6, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/zamena-microfona', function (req, res, next) {
  res.render('pages/iphones/iphone6/zamena-microfona', {
    title: "Замена микрофона iphone 6 | Service-iPhone",
    description: "Не слышит собеседник? Что делать если вас не слышно? В Service-Iphone знают как решить эту проблему.",
    keywords: "Замена микрофона iphone 6 в Киеве, Замена микрофона айфон 6, ремонт микрофона iphone 6",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/zamena-razgavornogo-dinamika', function (req, res, next) {
  res.render('pages/iphones/iphone6/zamena-razgavornogo-dinamika', {
    title: "Замена разговорного динамика iphone 6 | Service-iPhone",
    description: "Замена динамика iphone 6 в Киеве. Service-iPhone ремонт айфона 6 в центре столицы.",
    keywords: "Замена разговорного динамика iphone 6, Замена динамика айфон 6 в Киеве, Ремонт динамика iphone 6",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/zamena-razjoma-dlja-naushnikov', function (req, res, next) {
  res.render('pages/iphones/iphone6/zamena-razjoma-dlja-naushnikov', {
    title: "Замена разъёма для наушников (аудиоджека) iphone 6 | Service-iPhone",
    description: "iphone 6 замена разьема для наушников. В Сервисном центре Apple устрнят даную неприятность за считаные минуты.",
    keywords: "Замена разъёма для наушников iphone 6, Киев, ремонт айфон 6 разьем для наушников",
    menuActive: 'iphone'
  });
});


//======================
//    iPhone 6 plus
//======================

router.get('/remont-iphone-6plus', function (req, res, next) {
  req.db['iphone6plus'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/iphones/iphone6plus', {
      title: "Ремонт iPhone 6 Plus | Замена стекла Айфон 6 Киев | Service-iPhone",
      description: "Замена стекла iPhone 6 Plus - 1499грн. Ремонт iPhone 6 Plus, гарантия на все виды работ. СКИДКИ & АКЦИИ - (093) 722-91-56",
      keywords: "Замента стекла iPhone 6 Plus, Ремонт iPhone 6 Plus, ремонт айфона 6+",
      menuActive: 'iphone',
      pricesTable: docs
    });
  });
});

router.get('/remont-iphone-6plus/remnont-knopki-home', function (req, res, next) {
  res.render('pages/iphones/iphone6plus/remnont-knopki-home', {
    title: "Ремонт кнопки Home в iphone 6 plus | Service-iPhone ремонт айфон 6 plus",
    description: "Не работает кнопка Home на iphone 6 plus, мы проведем беслпатную диагностику в Киеве, и сделаем ремонт iphone 6 plus за 20 минут.",
    keywords: "Ремонт кнопки Home iphone 6 plus, замена кнопки home iphone 6 plus, Киев, ремонт iHome iphone 6 plus",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6plus/remont-knopki-vkluchenia', function (req, res, next) {
  res.render('pages/iphones/iphone6plus/remont-knopki-vkluchenia', {
    title: "Ремонт кнопки включения (блокировки) iphone 6 plus",
    description: "Когда перестала работать кнопка включения или блокирования в iphone 6 plus, обращайтесь за бесплатной диагностикой в Service-iPhone в Киеве",
    keywords: "Ремонт кнопки включения iphone 6 plus, Киев, айфон 6 plus, ремонт кнопки блокировки iphone 6 plus ",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6plus/remont-knopok-gromkosti', function (req, res, next) {
  res.render('pages/iphones/iphone6plus/remont-knopok-gromkosti', {
    title: "Ремонт кнопок громкости iphone 6 plus | Service-iPhone в Киеве",
    description: "не работают кнопки громкости в iphone 6 plus? В Service-iPhone проведут бесплатную диагностику и скажут причину поломки за 20 минут.",
    keywords: "Ремонт кнопки громкостки iphone 6 plus, не работает кнопка звука айфон 6 plus",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6plus/zamena-batarei', function (req, res, next) {
  res.render('pages/iphones/iphone6plus/zamena-batarei', {
    title: "Замена батареи (аккумулятора) iphone 6 plus в Киеве | Service-iPhone",
    description: "Сервисный центр Apple сделает замену батареи iPhone 6 в Киеве - не дорого и с гарантией для айфона 6",
    keywords: "Замена батареи iphone 6 plus, Киев, ремонт аккумулятора iphone 6 plus, замена батареи айфон 6 plus",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6plus/zamena-dinamika', function (req, res, next) {
  res.render('pages/iphones/iphone6plus/zamena-dinamika', {
    title: "Замена полифонического динамика (buzzer) iphone 6 plus | Service-iPhone",
    description: "Если перестал работать звук на iphone 6 plus, лучше обратиться за консультацией к специалистам. В нашем сервисном центре сделают бесплатную диагностику.",
    keywords: "Замена динамика iphone 6 plus в Киеве, ремонт динамика iphone 6 plus, замена динамика айфон 6 plus",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6plus/zamena-ekrana', function (req, res, next) {
  res.render('pages/iphones/iphone6plus/zamena-ekrana', {
    title: "Замена экрана (дисплея) iphone 6 plus в Киеве | Service-iPhone",
    description: "Качественная замена экрана (дисплея) на iphone 6 plus в Киеве. Цены от 200 грн. Время на ремонт 30 минут.",
    keywords: "Замена дисплея iphone 6 plus, замена экрана iphone 6 plus, Киев, замена дисплея айфон 6 plus, экрана",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6plus/zamena-front-camera', function (req, res, next) {
  res.render('pages/iphones/iphone6plus/zamena-front-camera', {
    title: "Замена фронтальной (передней) камеры iphone 6 plus | Service-iPhone",
    description: "Ремонт фронтальной камеры в iphone 6 plus занимает от 30 минут. В Service-iPhone делает качественный ремонт в городе Киеве",
    keywords: "Замена фронтальной камены iphone 6 plus, ремонт передней камеры iphone 6 plus, ремонт фронтальной камеры айфон 6 plus, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6plus/zamena-kameru', function (req, res, next) {
  res.render('pages/iphones/iphone6plus/zamena-kameru', {
    title: "Замена основной (задней) камеры iphone 6 plus | Service-iPhone",
    description: "Если ваша камера в iphone 6 перестала работать то, необходимо произвести диагностику дивайса, и заменить камеру в случаи поломки.",
    keywords: "Замена основной камеры iphone 6 plus, ремонт камеры iphone 6 plus, замена камеры айфон 6 plus, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6plus/zamena-korpysa', function (req, res, next) {
  res.render('pages/iphones/iphone6plus/zamena-korpysa', {
    title: "Замена корпуса iphone 6 plus в Киеве | Service-iPhone",
    description: "Разбили или полнули корпус iphone 6 plus? Не беда, наши специлисты быстро вылечат ваш айфон за 30 минут",
    keywords: "Замена корпуса iphone 6 plus, Замена корпуса айфон 6 plus, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6plus/zamena-microfona', function (req, res, next) {
  res.render('pages/iphones/iphone6plus/zamena-microfona', {
    title: "Замена микрофона iphone 6 plus | Service-iPhone",
    description: "Не слышит собеседник? Что делать если вас не слышно? В Service-Iphone знают как решить эту проблему.",
    keywords: "Замена микрофона iphone 6 plus в Киеве, Замена микрофона айфон 6 plus, ремонт микрофона iphone 6 plus",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6plus/zamena-razgavornogo-dinamika', function (req, res, next) {
  res.render('pages/iphones/iphone6plus/zamena-razgavornogo-dinamika', {
    title: "Замена разговорного динамика iphone 6 plus | Service-iPhone",
    description: "Замена динамика на iphone 6 plus. Сервисный центр делает ремонт айфон 6 плюс быстро и качествено.",
    keywords: "Замена разговорного динамика iphone 6 plus, Замена динамика айфон 6 plus в Киеве, Ремонт динамика iphone 6 plus",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6plus/zamena-razjoma-dlja-naushnikov', function (req, res, next) {
  res.render('pages/iphones/iphone6plus/zamena-razjoma-dlja-naushnikov', {
    title: "Замена разъёма для наушников (аудиоджека) iphone 6 plus | Service-iPhone",
    description: "iPhone 6 plus - замена разьема для наушников в Киеве. Сервис по ремонту техники Apple устрнят даную неприятность за считаные минуты.",
    keywords: "Замена разъёма для наушников iphone 6 plus, Киев, ремонт айфон 6 plus разьем для наушников",
    menuActive: 'iphone'
  });
});

//======================
//    iPhone 6s
//======================

router.get('/remont-iphone-6s', function (req, res, next) {
  req.db['iphone6s'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/iphones/iphone6s', {
      title: "Ремонт iPhone 6s | Замена стекла iPhone 6s | Service-iPhone",
      description: "Замена стекла на iPhone 6s от 1999грн. Наш СЦ выполняет любой ремонт iPhone 6s в Киеве. Проводим Акции и скилки.",
      keywords: "Ремонт iPhone 6s, замена стекла iphone 6s, Ремонт айфона 6с",
      menuActive: 'iphone',
      pricesTable: docs
    });
  });
});

router.get('/remont-iphone-6s/zamena-stekla', function (req, res, next) {
  res.render('pages/iphones/iphone6s/zamena-stekla', {
    title: "Замена стекла iPhone 6s в Киеве | Service-iPhone",
    description: "Производим качественную замену стекла iphone 6s в Киеве, цена от 2499 грн. Любой вид ремонта iPhone 6s в Киеве.",
    keywords: "Замена стекла iphone 6s, замена экрана iphone 6s, Киев, замена дисплея iPhone 6s, экрана",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6s/diagnostika', function (req, res, next) {
  res.render('pages/iphones/iphone6s/diagnostika', {
    title: "Диагностика iphone 6s в Киеве | Service-iPhone ремонт айфон 6s",
    description: "Бесплатную диагностику iphone 6s в Киеве в сможете получить в Service-iPhone. Специалисты быстро определят причину поломки айфон 6с",
    keywords: "Диагностика iphone 6s, Киев, Даигностика айфон 6s, Киев Диагностика iphone 6s",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6s/remnont-knopki-home', function (req, res, next) {
  res.render('pages/iphones/iphone6s/remnont-knopki-home', {
    title: "Ремонт кнопки Home в iphone 6s | Service-iPhone ремонт айфон 6s",
    description: "Не работает кнопка Home на iphone 6s, мы проведем беслпатную диагностику в Киеве, и сделаем ремонт iphone 6s за 20 минут.",
    keywords: "Ремонт кнопки Home iphone 6s, замена кнопки home iphone 6s, Киев, ремонт iHome iphone 6s",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6s/remont-knopki-vkluchenia', function (req, res, next) {
  res.render('pages/iphones/iphone6s/remont-knopki-vkluchenia', {
    title: "Ремонт кнопки включения (блокировки) iphone 6s",
    description: "Когда перестала работать кнопка включения или блокирования в iphone 6s, обращайтесь за бесплатной диагностикой в Service-iPhone в Киеве",
    keywords: "Ремонт кнопки включения iphone 6s, Киев, айфон 6s, ремонт кнопки блокировки iphone 6s ",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6s/remont-knopok-gromkosti', function (req, res, next) {
  res.render('pages/iphones/iphone6s/remont-knopok-gromkosti', {
    title: "Ремонт кнопок громкости iphone 6s | Service-iPhone в Киеве",
    description: "не работают кнопки громкости в iphone 6s? В Service-iPhone проведут бесплатную диагностику и скажут причину поломки за 20 минут.",
    keywords: "Ремонт кнопки громкостки iphone 6s, не работает кнопка звука айфон 6s",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6s/zamena-batarei', function (req, res, next) {
  res.render('pages/iphones/iphone6s/zamena-batarei', {
    title: "Замена батареи (аккумулятора) iphone 6s в Киеве | Service-iPhone",
    description: "СЦ - Сервис-iPhone делает замену батаери на iPhone 6s в Киеве, ремонт аккумулятора айфона 6с",
    keywords: "Замена батареи iphone 6s, Киев, ремонт аккумулятора iphone 6s, замена батареи айфон 6s",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6s/zamena-dinamika', function (req, res, next) {
  res.render('pages/iphones/iphone6s/zamena-dinamika', {
    title: "Замена полифонического динамика (buzzer) iphone 6s | Service-iPhone",
    description: "Если перестал работать звук на iphone 6s, лучше обратиться за консультацией к специалистам. В нашем сервисном центре сделают бесплатную диагностику.",
    keywords: "Замена динамика iphone 6s в Киеве, ремонт динамика iphone 6s, замена динамика айфон 6s",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6s/zamena-ekrana', function (req, res, next) {
  res.render('pages/iphones/iphone6s/zamena-ekrana', {
    title: "Замена экрана (дисплея) iphone 6s в Киеве | Service-iPhone",
    description: "Качественная замена экрана (дисплея) на iphone 6s в Киеве. Цены от 200 грн. Время на ремонт 30 минут.",
    keywords: "Замена дисплея iphone 6s, замена экрана iphone 6s, Киев, замена дисплея айфон 6s, экрана",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6s/zamena-front-camera', function (req, res, next) {
  res.render('pages/iphones/iphone6s/zamena-front-camera', {
    title: "Замена фронтальной (передней) камеры iphone 6s | Service-iPhone",
    description: "Ремонт фронтальной камеры в iphone 6s занимает от 30 минут. В Service-iPhone делает качественный ремонт в городе Киеве",
    keywords: "Замена фронтальной камены iphone 6s, ремонт передней камеры iphone 6s, ремонт фронтальной камеры айфон 6s, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6s/zamena-kameru', function (req, res, next) {
  res.render('pages/iphones/iphone6s/zamena-kameru', {
    title: "Замена основной (задней) камеры iphone 6s | Service-iPhone",
    description: "Service-iPhone делает замену камеры на iphone 6s быстро и недорого. Так же мы проведем бесплатную диагностику",
    keywords: "Замена основной камеры iphone 6s, ремонт камеры iphone 6s, замена камеры айфон 6s, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6s/zamena-korpysa', function (req, res, next) {
  res.render('pages/iphones/iphone6s/zamena-korpysa', {
    title: "Замена корпуса iphone 6s в Киеве | Service-iPhone",
    description: "Разбили или полнули корпус iphone 6s? Не беда, наши специлисты быстро вылечат ваш айфон за 30 минут",
    keywords: "Замена корпуса iphone 6s, Замена корпуса айфон 6s, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6s/zamena-microfona', function (req, res, next) {
  res.render('pages/iphones/iphone6s/zamena-microfona', {
    title: "Замена микрофона iphone 6s | Service-iPhone",
    description: "Не слышит собеседник? Что делать если вас не слышно? В Service-Iphone знают как решить эту проблему.",
    keywords: "Замена микрофона iphone 6s в Киеве, Замена микрофона айфон 6s, ремонт микрофона iphone 6s",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6s/zamena-razgavornogo-dinamika', function (req, res, next) {
  res.render('pages/iphones/iphone6s/zamena-razgavornogo-dinamika', {
    title: "Замена разговорного динамика iphone 6s | Service-iPhone",
    description: "Замена динамика в iphone 6s в Сервисном центре Apple, всегда проходит быстро и качественно! - Service-iPhone.com.ua",
    keywords: "Замена разговорного динамика iphone 6s, Замена динамика айфон 6s в Киеве, Ремонт динамика iphone 6s",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6s/zamena-razjoma-dlja-naushnikov', function (req, res, next) {
  res.render('pages/iphones/iphone6s/zamena-razjoma-dlja-naushnikov', {
    title: "Замена разъёма для наушников (аудиоджека) iphone 6s | Service-iPhone",
    description: "Замена разьема для наушников в iphone 6s Киев, проходит быстро и с гарантией в Сервисном центре Apple",
    keywords: "Замена разъёма для наушников iphone 6s, Киев, ремонт айфон 6s разьем для наушников",
    menuActive: 'iphone'
  });
});

//======================
//    iPhone 6s Plus
//======================

router.get('/remont-iphone-6splus', function (req, res, next) {
  req.db['iphone6splus'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/iphones/iphone6splus', {
      title: "Ремонт iPhone 6s Plus | Замена Стекла iPhone 6s Plus | Service-iPhone",
      description: "Все виды ремонта iPhone 6s Plus от Service-iPhone. Ремонт айфона 6s Plus, замена стекла, батери, корпуса. ",
      keywords: "Ремонт iPhone 6s Plus, замена стекла iPhone 6s Plus, ремонт айфона 6с плюс",
      menuActive: 'iphone',
      pricesTable: docs
    });
  });
});


//======================
//    iPhone SE
//======================

router.get('/remont-iphone-se', function (req, res, next) {
  req.db['iphonese'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/iphones/iphonese', {
      title: "Замена стекла iPhone SE | Ремонт iPhone SE | Service-iPhone",
      description: "Замена стекла на iPhone SE от 999грн. Все виды ремонта iphone se. Service-iPhone - недорогой ремонт, скидки, акции.",
      keywords: "Ремонт iPhone SE, замена стекла iphone se",
      menuActive: 'iphone',
      pricesTable: docs
    });
  });
});


//======================
//    iPhone 7
//======================

router.get('/remont-iphone-7', function (req, res, next) {
  req.db['iphone7'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/iphones/iphone7', {
      title: "Ремонт iPhone 7 | Замена стекла iPhone 7 | Service-iPhone",
      description: "Цена на ремонт iphone 7. Замена стекла iPhone 7 в Киеве. Service-iPhone производит все виды ремонта iphone 7",
      keywords: "Ремонт iPhone 7, замена стекла iPhone 7, ремонт айфон 7",
      menuActive: 'iphone',
      pricesTable: docs
    });
  });
});

//======================
//    iPhone 7 Plus
//======================

router.get('/remont-iphone-7plus', function (req, res, next) {
  req.db['iphone7plus'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/iphones/iphone7plus', {
      title: "Ремонт iPhone 7 Plus | Замена стекла iPhone 7 Plus | Service-iPhone",
      description: "Ремонт iPhone 7 Plus в городе киеве можно произвести в Service-iPhone. Замену стекла/дисплея/батерии сделаем за 60 мин.",
      keywords: "Ремонт iPhone 7 Plus, замена стекла iPhone 7 Plus, ремонт айфон 7",
      menuActive: 'iphone',
      pricesTable: docs
    });
  });
});

module.exports = router;
