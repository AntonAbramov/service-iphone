var express = require('express');
var router = express.Router();

router.get('/remont-iphone', function (req, res, next) {
  res.render('pages/landing', {
    title: "Ремонт iPhone в Киеве. Замена ✓ стекла ✓ дисплея ✓ батаерии от 299грн. | Service-iPhone",
    description: "Бессплатная диагностика ✪ быстрая доставка ✪ качественный ремонт - это далеко не все положительные качества нашего Сервисного-Центра",
    keywords: "Ремонт iPhone, Киев"
  });
});

router.get('/iphone', function (req, res, next) {
  res.render('pages/iphones/index', {
    title: "Ремонт iPhone в Киеве Замена стекла, дисплея на айфон - Киев | Service-iPhone",
    description: "Экспресс ремонт iPhone, популярная услуга замена стекла на iPhone - 299 грн. ✓ Оригинальные запчасти ✓ Скидки ✓ Не дорогой ремонт. ☎ (066) 566-97-52",
    keywords: "ремонт iphone, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone3g', function (req, res, next) {
  req.db['iphone3'].find().sort({'idx': 1}, function (err, docs) {
    if (err) throw err;
    res.render('pages/iphones/iphone3', {
      title: "Ремонт iPhone 3G в Киеве | Service-iPhone",
      description: "Ремонт iPhone 3G в сервисном центре Service-iPhone в Киеве. Замена стекла на айфон 3gs.",
      keywords: "ремонт iphone 3G",
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
      title: "Ремонт iPhone 4, Замена стекла и дисплея на айфон 4 в Киеве | Service-iPhone",
      description: "Недорогой но качественный ремонт iPhone 4 с гарантией от профессионалов. ✓ Бесплатная диагностика. ✓ Оригинальные детали на ремонт iPhone 4.",
      keywords: "Ремонт iPhone 4",
      menuActive: 'iphone',
      pricesTable: docs
    });
  });
});

router.get('/remont-iphone4/diagnostika', function (req, res, next) {
  res.render('pages/iphones/iphone4/diagnostika', {
    title: "Диагностика iPhone 4 в Киеве | Service-iPhone",
    description: "Бесплатная диагностика iPhone 4 в Киеве. ☎ (096) 125-32-46 ☎ (093) 722-91-56 ☎ (066) 566-97-52.",
    keywords: "Диагностика iphone 4, Киев, Даигностика айфон 4",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/remnont-knopki-home', function (req, res, next) {
  res.render('pages/iphones/iphone4/remnont-knopki-home', {
    title: "Ремонт кнопки Home в iPhone 4 | Service-iPhone",
    description: "Не работает кнопка Home на iPhone 4, мы проведем беслпатную диагностику и сообщим Вам причину поломки и как ее исправить.",
    keywords: "Ремонт кнопки Home iPhone 4, замена кнопки home iphone 4, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/remont-knopki-vkluchenia', function (req, res, next) {
  res.render('pages/iphones/iphone4/remont-knopki-vkluchenia', {
    title: "Ремонт кнопки включения (блокировки) iPhone 4",
    description: "Когда перестала работать кнопка включения или блокирования в iphone 4, обращайтесь за бесплатной диагностикой в Service-iPhone ☎ (093) 722-91-56",
    keywords: "Ремонт кнопки включения iPhone 4, Киев, айфон 4, ремонт кнопки блокировки iphone 4 ",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/remont-knopok-gromkosti', function (req, res, next) {
  res.render('pages/iphones/iphone4/remont-knopok-gromkosti', {
    title: "Ремонт кнопоки громкости iPhone 4 | Service-iPhone в Киеве",
    description: "не работают кнопки громкости в iphone 4? Диагностика проводится в течении 10 минут. После чего можно приступать к ремонту кнопоки громкости",
    keywords: "Ремонт кнопки громкостки iPhone 4, не работает кнопка звука айфон 4",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/zamena-batarei', function (req, res, next) {
  res.render('pages/iphones/iphone4/zamena-batarei', {
    title: "Замена батареи (аккумулятора) iPhone 4 в Киеве | Service-iPhone",
    description: "iPhone 4 быстро разряжается? Или не работает батарея? В Service-iPhone быстро найдут причину неполадки и произведут качественную замену",
    keywords: "Замена батареи iPhone 4, замена батареи айфон 4",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/zamena-dinamika', function (req, res, next) {
  res.render('pages/iphones/iphone4/zamena-dinamika', {
    title: "Замена полифонического динамика (buzzer) iPhone 4 | Service-iPhone",
    description: "Если перестал работать звук на iPhone 4, лучше обратиться за консультацией к специалистам. ☎ (096) 125-32-46 В нашем центре сделают бесплатную диагностику.",
    keywords: "Замена динамика iPhone 4 в Киеве, ремонт динамика iphone 4",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/zamena-ekrana', function (req, res, next) {
  res.render('pages/iphones/iphone4/zamena-ekrana', {
    title: "Замена экрана на айфон 4 в Киеве | Service-iPhone",
    description: "Замена экрана (дисплея) на айфон 4 в Киеве ✪ 649 грн. тел. ☎ (066) 566-97-52",
    keywords: "Замена дисплея айфон 4, замена экрана айфон 4, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/zamena-front-camera', function (req, res, next) {
  res.render('pages/iphones/iphone4/zamena-front-camera', {
    title: "Замена фронтальной (передней) камеры iPhone 4. Цена 249 грн. | Service-iPhone",
    description: "Ремонт фронтальной камеры в iPhone 4 стоит 249 грн. Киев телефоны: ☎ (066) 566-97-52 ☎ (093) 421-12-21",
    keywords: "Замена фронтальной камеры iPhone 4, ремонт передней камеры iPhone 4",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/zamena-kameru', function (req, res, next) {
  res.render('pages/iphones/iphone4/zamena-kameru', {
    title: "Замена основной (задней) камеры iPhone 4 - 249грн | Service-iPhone",
    description: "Стоимость замены камеры на айфон 4 - 249 грн. Киев м. Золотые Ворота 32 тел. ☎ (096) 125-32-46 м. Олимпийская (067) 301-12-21",
    keywords: "Замена основной камеры iPhone 4, ремонт камеры iPhone 4",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/zamena-korpysa', function (req, res, next) {
  res.render('pages/iphones/iphone4/zamena-korpysa', {
    title: "Замена корпуса iPhone 4 в Киеве | Service-iPhone",
    description: "549 грн стоимость замены корпуса на iPhone 4. Длительность - 30 минут",
    keywords: "Замена корпуса iPhone 4, Замена корпуса айфон 4, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/zamena-microfona', function (req, res, next) {
  res.render('pages/iphones/iphone4/zamena-microfona', {
    title: "Замена микрофона iPhone 4 | Service-iPhone",
    description: "Цена на замену микрофона 249 грн. м. Олимпийская ☎ (095) 431-12-21 м. Золотые Ворота ☎ (066) 566-97-52",
    keywords: "Замена микрофона iPhone 4 в Киеве, Замена микрофона айфон 4",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/zamena-razgavornogo-dinamika', function (req, res, next) {
  res.render('pages/iphones/iphone4/zamena-razgavornogo-dinamika', {
    title: "Замена разговорного динамика iPhone 4 | Service-iPhone",
    description: "Пропал звук в айфон 4? Попробуйте перезагрузить телефон. Замена динамика на iPhone 4 - 199грн. Киев.",
    keywords: "Замена разговорного динамика iPhone 4, Замена динамика айфон 4 в Киеве",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/zamena-razjoma-dlja-naushnikov', function (req, res, next) {
  res.render('pages/iphones/iphone4/zamena-razjoma-dlja-naushnikov', {
    title: "Замена разъёма для наушников (аудиоджека) iPhone 4 | Service-iPhone",
    description: "Замена разьема для наушников в iPhone 4 стоит 249 грн. Длительность 10-15 минут.",
    keywords: "Замена разъёма для наушников iPhone 4, Киев",
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
      title: "Ремонт iPhone 4s | Замена стекла на iPhone 4s в Киеве | Service-iPhone",
      description: "Замена стекла,экрана в серисном центре Service-iPhone стоит 649 грн. ✓ Гаратия, ✓ Акции ✓ Скидки.",
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
      description: "В нашем СЦ сделают быстрый замену стекла на iPhone 5. Наши контакты м.Золотые Ворота ☎ (096) 125-32-46 м.Олимпийская ☎ (095) 431-12-21",
      keywords: "Ремонт iPhone 5, ремонт айфон 5, Киев, замена стекла iphone 5, дисплея, батареи",
      menuActive: 'iphone',
      pricesTable: docs
    });
  });
});

router.get('/remont-iphone-5/zamena-stekla', function (req, res, next) {
  res.render('pages/iphones/iphone5/zamena-stekla', {
    title: "Замена стекла айфон 5 в Киеве | Service-iPhone",
    description: "замена стекла на айфон 5 - 799грн в Киеве. Сама замена занимает 20 минут вашего времени",
    keywords: "Замена стекла iphone 5, замена экрана iphone 5, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/diagnostika', function (req, res, next) {
  res.render('pages/iphones/iphone5/diagnostika', {
    title: "Диагностика iphone 5 в Киеве | Service-iPhone",
    description: "Необходима диагностика iphone 5? ✪ Контакты - ул. Богдана Хмельницкого 32 тел: ☎ (096) 125-32-46(093) ☎ 722-91-56(066) ☎ 566-97-52",
    keywords: "Диагностика айфон 5, Киев, Даигностика айфон 5, Киев Диагностика iphone 5",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/remnont-knopki-home', function (req, res, next) {
  res.render('pages/iphones/iphone5/remnont-knopki-home', {
    title: "Ремонт кнопки Home в iphone 5 | Service-iPhone",
    description: "Цена замены кнопки home на iphone 5 - 199грн. Контакты: м.Золотые Ворота ☎ (093) 722-91-56 ☎ (096) 125-32-46 ✪ м.Олимпийская ☎ (095) 431-12-21",
    keywords: "Ремонт кнопки Home iphone 5, замена кнопки home iphone 5",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/remont-knopki-vkluchenia', function (req, res, next) {
  res.render('pages/iphones/iphone5/remont-knopki-vkluchenia', {
    title: "Ремонт кнопки включения (блокировки) iphone 5",
    description: "Замена кнопки включения на iPhone 5 - 349 грн. ✪ м.Золотые Ворота ☎ (093) 722-91-56 ☎ (066) 566-97-52 ✪ м.Олимпийская ☎ (095) 431-12-21 ☎ (093) 421-12-21",
    keywords: "Ремонт кнопки включения iphone 5, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/remont-knopok-gromkosti', function (req, res, next) {
  res.render('pages/iphones/iphone5/remont-knopok-gromkosti', {
    title: "Ремонт кнопок громкости iphone 5 | Service-iPhone в Киеве",
    description: "не работают кнопки громкости в iphone 5? Стоимость замены 349грн. ☎ (066) 566-97-52",
    keywords: "Ремонт кнопки громкостки iphone 5, не работает кнопка звука айфон 5",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/zamena-batarei', function (req, res, next) {
  res.render('pages/iphones/iphone5/zamena-batarei', {
    title: "Замена батареи (аккумулятора) iphone 5 в Киеве | Service-iPhone",
    description: "Цена на замену батерии в айфон 5 - 399грн. ✪ м.Золотые Ворота ☎ (066) 566-97-52",
    keywords: "Замена батареи iphone 5, замена батареи айфон 5",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/zamena-dinamika', function (req, res, next) {
  res.render('pages/iphones/iphone5/zamena-dinamika', {
    title: "Замена полифонического динамика (buzzer) iphone 5 | Service-iPhone",
    description: "✪ м.Золотые Ворота ☎ (066) 566-97-52 ✪ м.Олимпийская ☎ (095) 431-12-21 ☎ (067) 301-12-21. Замена динамика на айфон 5 - 299грн",
    keywords: "Замена динамика iphone 5 в Киеве, замена динамика айфон 5",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/zamena-ekrana', function (req, res, next) {
  res.render('pages/iphones/iphone5/zamena-ekrana', {
    title: "Замена экрана (дисплея) айфон 5 в Киеве | Service-iPhone",
    description: "Качественная замена экрана (дисплея) на айфон 5 в Киеве. Цены от 799 грн.",
    keywords: "Замена дисплея iphone 5, замена дисплея айфон 5, экрана",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/zamena-front-camera', function (req, res, next) {
  res.render('pages/iphones/iphone5/zamena-front-camera', {
    title: "Замена фронтальной (передней) камеры iphone 5 | Service-iPhone",
    description: "349 грн Цена на Ремонт фронтальной камеры в iphone 5. ☎ (067) 301-12-21 ☎ (093) 421-12-21",
    keywords: "Замена фронтальной камеры iphone 5, ремонт передней камеры iphone 5, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/zamena-kameru', function (req, res, next) {
  res.render('pages/iphones/iphone5/zamena-kameru', {
    title: "Замена камеры в iphone 5 | м. Олимпийска, м. Золотые Ворота  | Service-iPhone",
    description: "Цена на замену основной камеры в iPhone 5 в Service-iPhone - 399грн. ✪ м.Золотые Ворота ☎ (093) 722-91-56 ☎ (066) 566-97-52 ✪ м.Олимпийская ☎ (095) 431-12-21",
    keywords: "Замена основной камеры iphone 5, ремонт камеры iphone 5, замена камеры айфон 5, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/zamena-korpysa', function (req, res, next) {
  res.render('pages/iphones/iphone5/zamena-korpysa', {
    title: "Замена корпуса iphone 5 в Киеве | Service-iPhone",
    description: "стоимость замены корпуса на айфон 5 - 899грн. Контакты ☎ (093) 722-91-56 ☎ (095) 431-12-21 ☎ (067) 301-12-21",
    keywords: "Замена корпуса iphone 5, Замена корпуса айфон 5, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone5/zamena-microfona', function (req, res, next) {
  res.render('pages/iphones/iphone5/zamena-microfona', {
    title: "Замена микрофона iphone 5 | Service-iPhone",
    description: "Цена на замену микрофона в айфон 5 - 349грн. ✪ Гарантия ✪ Качество ☎ (066) 566-97-52 ☎ (095) 431-12-21",
    keywords: "Замена микрофона iphone 5 в Киеве, Замена микрофона айфон 5",
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
    description: "399 грн. стоит поменять разьем для наушников айфон 5 ☎ (093) 421-12-21 ☎ (096) 125-32-46",
    keywords: "Замена разъёма для наушников iphone 5, Киев",
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
      title: "Ремонт iPhone 5c | Замена стекла - 899 грн | Service-iPhone",
      description: "☎ (093) 722-91-56 Service-iPhone делает експерсс ремонт iPhone 5c. Замена ✓ стекна ✓ дисплея ✓ экрана на айфон 5с. ☎ (067) 301-12-21",
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
      title: "Ремонт iPhone 5s | Замена стекла экрана | Service-iPhone в Киеве",
      description: "Срочный ремонт iPhone 5s. Замена стекла на айфон 5s в Киеве - 799грн. ✓ Акции ✓ Скидки ☎ (066) 566-97-52",
      keywords: "Ремонт iPhone 5s, замена стекла iphone 5s, Киев",
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
      title: "Ремонт iPhone 6 | Замена ✓ стекла ✓ дисплея   | Киев | Service-iPhone",
      description: "Замена стекла на iPhone 6  - 1199 грн. Наш сервисный центр производит экспресс замену стекла/дисплея на айфон 6 за 20 минут.",
      keywords: "Ремонт iPhone 6, Киев, замена стекла iphone 6",
      menuActive: 'iphone',
      pricesTable: docs
    });
  });
});

router.get('/remont-iphone-6/zamena-stekla', function (req, res, next) {
  res.render('pages/iphones/iphone6/zamena-stekla', {
    title: "Замена стекла iPhone 6 в Киеве | Service-iPhone",
    description: "Поменяем дисплей или стекло на iPhone 6 быстро и недорого. от 1199грн. ✪ м.Золотые Ворота ☎ (093) 722-91-56 ✪ м.Олимпийская ☎ (095) 431-12-21",
    keywords: "Замена стекла iphone 6, Киев, замена экрана iphone 6",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/diagnostika', function (req, res, next) {
  res.render('pages/iphones/iphone6/diagnostika', {
    title: "Диагностика iphone 6 в Киеве | Service-iPhone",
    description: "ул. Богдана Хмельницкого 32 тел: ☎ (096) 125-32-46 ☎ (093) 722-91-56 ☎ (066) 566-97-52 Бесплатная диагностика для iphone 6 в Киеве",
    keywords: "Диагностика iphone 6, Киев, Даигностика айфон 6",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/remnont-knopki-home', function (req, res, next) {
  res.render('pages/iphones/iphone6/remnont-knopki-home', {
    title: "Ремонт кнопки Home в iphone 6 | Service-iPhone",
    description: "Не работает кнопка Home на iphone 6, мы проведем беслпатную диагностику в Киеве, и сделаем ремонт iphone 6 за 20 минут.",
    keywords: "Ремонт кнопки Home iphone 6, замена кнопки home iphone 6, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/remont-knopki-vkluchenia', function (req, res, next) {
  res.render('pages/iphones/iphone6/remont-knopki-vkluchenia', {
    title: "Ремонт кнопки включения (блокировки) iphone 6",
    description: "449 грн - замена кнопки включения на iphone 6. ✓ Быстро ✓ Качественно ✓ Гарантия ✪ м.Олимпийская ☎ (095) 431-12-21 ☎ (067) 301-12-21 ✪ м.Золотые Ворота ☎ (093) 722-91-56",
    keywords: "Ремонт кнопки включения iphone 6, Киев, ремонт кнопки блокировки iphone 6 ",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/remont-knopok-gromkosti', function (req, res, next) {
  res.render('pages/iphones/iphone6/remont-knopok-gromkosti', {
    title: "Ремонт кнопок громкости iphone 6 | Service-iPhone в Киеве",
    description: "Замена кнопок громкости на iphone 6 за 20 минут. Цена ремонта 499грн. ☎ (093) 421-12-21 ул. Богдана Хмельницкого, 32 ☎ (096) 125-32-46",
    keywords: "Ремонт кнопки громкостки iphone 6, замена кнопки звука айфон 6",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/zamena-batarei', function (req, res, next) {
  res.render('pages/iphones/iphone6/zamena-batarei', {
    title: "Замена батареи (аккумулятора) iphone 6 в Киеве | Service-iPhone",
    description: "499 грн стоимость замены аккумулятора на iphone 6. ✓ Опытные мастера ✓ Оргинальные детали ✓ Быстрая замена ☎ (066) 566-97-52 ☎ (093) 421-12-21",
    keywords: "Замена батареи iphone 6, замена батареи айфон 6",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/zamena-dinamika', function (req, res, next) {
  res.render('pages/iphones/iphone6/zamena-dinamika', {
    title: "Замена полифонического динамика (buzzer) iphone 6 | Service-iPhone",
    description: "Замена динамика в iphone 6 - 549 грн. ✪ м.Олимпийская ☎ (095) 431-12-21 ✪ м.Золотые Ворота ☎ (096) 125-32-46",
    keywords: "Замена динамика iphone 6 в Киеве, замена динамика айфон 6",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/zamena-ekrana', function (req, res, next) {
  res.render('pages/iphones/iphone6/zamena-ekrana', {
    title: "Замена экрана (дисплея) iphone 6 в Киеве | Service-iPhone",
    description: "Качественная замена экрана (дисплея) на iphone 6 в Киеве. Цена 1199 грн. Экспресс замена за 20 минут.",
    keywords: "Замена дисплея iphone 6, замена экрана iphone 6, Киев, замена дисплея айфон 6",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/zamena-front-camera', function (req, res, next) {
  res.render('pages/iphones/iphone6/zamena-front-camera', {
    title: "Замена фронтальной (передней) камеры iphone 6 | Service-iPhone",
    description: "Замена передней камеры в iphone 6 - 499 грн. ✓ Оригинальные запчасти ✓ Качественно ✪ м.Золотые Ворота ☎ (093) 722-91-56 ✪ м.Олимпийская ☎ (093) 421-12-21",
    keywords: "Замена фронтальной камеры iphone 6, замена передней камеры iphone 6, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/zamena-kameru', function (req, res, next) {
  res.render('pages/iphones/iphone6/zamena-kameru', {
    title: "Замена основной (задней) камеры iphone 6 | Service-iPhone",
    description: "Замена основной камеры стоит 699грн и по времени занимает не более 20 минут. ☎ (066) 566-97-52 ☎ (093) 722-91-56 ✪ м.Золотые Ворота",
    keywords: "Замена основной камеры iphone 6, замена камеры айфон 6, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/zamena-korpysa', function (req, res, next) {
  res.render('pages/iphones/iphone6/zamena-korpysa', {
    title: "Замена корпуса iphone 6 в Киеве | Service-iPhone",
    description: "замена корпуса на iphone 6 - 1399грн. ✪ Оригинальные запчасти ✪ Опытные мастера ✪ Гарантия",
    keywords: "Замена корпуса iphone 6, Замена корпуса айфон 6, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/zamena-microfona', function (req, res, next) {
  res.render('pages/iphones/iphone6/zamena-microfona', {
    title: "Замена микрофона iphone 6 | Service-iPhone",
    description: "Замена или ремонт микрофона в iphone 6 обойдется вам в 499 грн. ✓ Оригинальные запчатси ✓ Центр города ✓ Гарантия",
    keywords: "Замена микрофона iphone 6 в Киеве, Замена микрофона айфон 6",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/zamena-razgavornogo-dinamika', function (req, res, next) {
  res.render('pages/iphones/iphone6/zamena-razgavornogo-dinamika', {
    title: "Замена разговорного динамика iphone 6 | Service-iPhone",
    description: "☎ (095) 431-12-21 ☎ (096) 125-32-46 Замена динамика в iphone 6 ✓ Центр города ✓ Опытные мастера ✓ Экспресс замена",
    keywords: "Замена разговорного динамика iphone 6, Замена динамика айфон 6 в Киеве",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone6/zamena-razjoma-dlja-naushnikov', function (req, res, next) {
  res.render('pages/iphones/iphone6/zamena-razjoma-dlja-naushnikov', {
    title: "Замена разъёма для наушников (аудиоджека) iphone 6 | Service-iPhone",
    description: "iphone 6 замена разьема для наушников обойдется вам в 499 грн. Киев - ☎ (093) 722-91-56 ☎ (095) 431-12-21 ",
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
      title: "Ремонт iPhone 6 Plus | Замена стекла Айфон 6 в Киеве | Service-iPhone",
      description: "Ремонт iPhone 6 Plus, Замена стекла iPhone 6 Plus - 1499грн. ✓ Оригинальные детали ✓ Гарантия ✓ Экспресс ремонт! ☎ (093) 722-91-56 ☎ (096) 125-32-46 ☎ (067) 301-12-21",
      keywords: "Замента стекла iPhone 6 Plus, Ремонт iPhone 6 Plus, ремонт айфона 6+",
      menuActive: 'iphone',
      pricesTable: docs
    });
  });
});

router.get('/remont-iphone-6plus/remnont-knopki-home', function (req, res, next) {
  res.render('pages/iphones/iphone6plus/remnont-knopki-home', {
    title: "Ремонт кнопки Home в iphone 6 plus | Service-iPhone",
    description: "Замена кнопки home в iPhone 6 plus - 399грн. ☎ (093) 421-12-21 ☎ (096) 125-32-46 ☎ (066) 566-97-52 - звоните мы находимся в центре города",
    keywords: "Ремонт кнопки Home iphone 6 plus, замена кнопки home iphone 6 plus, Киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6plus/remont-knopki-vkluchenia', function (req, res, next) {
  res.render('pages/iphones/iphone6plus/remont-knopki-vkluchenia', {
    title: "Ремонт кнопки включения (блокировки) iphone 6 plus",
    description: "499грн - Замена кнопки включения/блокирования в iphone 6 плюс. ☎ (093) 722-91-56 - Центр Киев.",
    keywords: "Ремонт кнопки включения iphone 6 plus, Киев, ремонт кнопки блокировки iphone 6 plus ",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6plus/remont-knopok-gromkosti', function (req, res, next) {
  res.render('pages/iphones/iphone6plus/remont-knopok-gromkosti', {
    title: "Ремонт кнопок громкости iphone 6 plus | Service-iPhone в Киеве",
    description: "599 грн - стоимость замены кнопок громкости на iphone 6 +. ✪ Оригинальные детали ✪ Гарантия ✪ Экспресс замена",
    keywords: "Ремонт кнопки громкостки iphone 6 plus, не работает кнопка звука айфон 6 plus",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6plus/zamena-batarei', function (req, res, next) {
  res.render('pages/iphones/iphone6plus/zamena-batarei', {
    title: "Замена батареи (аккумулятора) iphone 6 plus в Киеве | Service-iPhone",
    description: "599 грн - стоит поменять аккумулятор/батареию на iphone 6 plus в Киеве. ☎ (066) 566-97-52 ☎ (095) 431-12-21 ☎ (093) 722-91-56",
    keywords: "Замена батареи iphone 6 plus, замена батареи айфон 6 plus",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6plus/zamena-dinamika', function (req, res, next) {
  res.render('pages/iphones/iphone6plus/zamena-dinamika', {
    title: "Замена полифонического динамика (buzzer) iphone 6 plus | Service-iPhone",
    description: "Замена динамика на айфон 6 плюс - 499 грн. ✪ Находимся в центре ✪ Качественный ремонт ✪ Экспресс услуга ☎ (067) 301-12-21",
    keywords: "Замена динамика iphone 6 plus в Киеве, ремонт динамика iphone 6 plus, замена динамика айфон 6 plus",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6plus/zamena-ekrana', function (req, res, next) {
  res.render('pages/iphones/iphone6plus/zamena-ekrana', {
    title: "Замена экрана (дисплея) iphone 6 plus в Киеве | Service-iPhone",
    description: "Качественная замена ✓ экрана - 1399 грн ✓ дисплея - 2199 грн на iphone 6 plus в Киеве.",
    keywords: "Замена дисплея iphone 6 plus, замена экрана iphone 6 plus, Киев, замена дисплея айфон 6 plus",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6plus/zamena-front-camera', function (req, res, next) {
  res.render('pages/iphones/iphone6plus/zamena-front-camera', {
    title: "Замена фронтальной (передней) камеры iphone 6 plus | Service-iPhone",
    description: "Ремонт фронтальной камеры в iphone 6 plus занимает от 30 минут. ",
    keywords: "Замена фронтальной камеры iphone 6 plus, Киев",
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
      title: "Ремонт iPhone 6s | Быстрая замена стекла | Service-iPhone",
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
    title: "Диагностика iphone 6s в Киеве | Service-iPhone",
    description: "Бесплатную диагностику iphone 6s в Киеве в сможете получить в Service-iPhone. Специалисты быстро определят причину поломки айфон 6с",
    keywords: "Диагностика iphone 6s, Киев, Даигностика айфон 6s, Киев Диагностика iphone 6s",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6s/remnont-knopki-home', function (req, res, next) {
  res.render('pages/iphones/iphone6s/remnont-knopki-home', {
    title: "Ремонт кнопки Home в iphone 6s | Service-iPhone",
    description: "Не работает кнопка Home на iphone 6s, мы проведем беслпатную диагностику в Киеве, и сделаем ремонт iphone 6s за 20 минут.",
    keywords: "Ремонт кнопки Home iphone 6s, замена кнопки home iphone 6s, Киев",
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
    description: "СЦ - Сервис-iPhone делает замену батаери на iPhone 6s в Киеве",
    keywords: "Замена батареи iphone 6s, Киев, замена батареи айфон 6s",
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
    description: "Качественная замена экрана (дисплея) на iphone 6s в Киеве. Цены от 200 грн.",
    keywords: "Замена дисплея iphone 6s, замена экрана iphone 6s, Киев, замена дисплея айфон 6s, экрана",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6s/zamena-front-camera', function (req, res, next) {
  res.render('pages/iphones/iphone6s/zamena-front-camera', {
    title: "Замена фронтальной (передней) камеры iphone 6s | Service-iPhone",
    description: "Ремонт фронтальной камеры в iphone 6s занимает от 30 минут. ",
    keywords: "Замена фронтальной камеры iphone 6s, ремонт передней камеры iphone 6s, ремонт фронтальной камеры айфон 6s, Киев",
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
      title: "Ремонт iPhone 6s Plus | Срочная замена Стекла | Service-iPhone",
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
      title: "Замена стекла iPhone SE | Замена стекла и экрана | Киев и Украина | Service-iPhone",
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
      title: "Ремонт iPhone 7 | Дешевая замена стекла | Киев и Украина | Service-iPhone",
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
      title: "Ремонт iPhone 7 Plus | Замена стекла на Айфон 7 Plus | Киев |  Service-iPhone",
      description: "Ремонт iPhone 7 Plus в городе киеве можно произвести в Service-iPhone. Замену стекла/дисплея/батерии сделаем за 60 мин.",
      keywords: "Ремонт iPhone 7 Plus, замена стекла iPhone 7 Plus, ремонт айфон 7",
      menuActive: 'iphone',
      pricesTable: docs
    });
  });
});

module.exports = router;
