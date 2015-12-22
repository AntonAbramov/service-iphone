var express = require('express');
var router = express.Router();

router.get('/remont-iphone', function (req, res, next) {
  res.render('pages/landing', {
    title: "Ремонт iPhone & iPad в Киеве | Service-Iphone",
    description: "Бессплатная диагностика, быстрая доставка, качественный ремонт - это далеко не все положительные качества нашего Сервисного-Центра",
    keywords: "Ремонт iPhone Киев, ремонт iPad Киев, ремонт айфон, сервисный центр Apple Киев"
  });
});

router.get('/iphone', function (req, res, next) {
  res.render('pages/iphones/index', {
    title: "Ремонт iPhone 3g/3gs/4/4s/5/5s/6 оригинальные запчасти",
    description: "Делаем ремонт всех моделей iPhone, быстро и качественно, с гарантией 6 месяцев",
    keywords: "Замена стекла, дисплея, экрана, ремонт аккумулятора, батареи iphone, киев",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone3g', function (req, res, next) {

  res.render('pages/iphones/iphone3', {
    title: "Ремонт iPhone 3G в Киеве | Сервисный центр Apple - Service-iPhone",
    description: "Наш Сервис сделает качественный ремонт iPhone 3gs в Киеве с гарантией. Все виды работ включая замену стекла/экрана, реанимируем вашу батарею, почистим после воды",
    keywords: "ремонт iphone 3gs, киев, ремонт айфона 3gs, замена стекла iphone 3gs",
    menuActive: 'iphone'
  });
});


//======================
//    iPhone 4
//======================
router.get('/remont-iphone4', function (req, res, next) {
  req.db['iphone4'].find().sort({'idx' : 1}, function (err, docs) {
    if (err) throw err;
    console.log(docs);
    res.render('pages/iphones/iphone4', {
      title: "Ремонт iPhone 4 в Киеве | Сервисный центр Apple - Service-iPhone",
      description: "На СЦ делает замену стекла, дисплея, кнопок, аккумулятора с гарантией. Не работает iPhone 4? - мы вам поможем .",
      keywords: "Ремонт iPhone 4, ремонт айфона 4, Киев, замена стекла iPhone 4",
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
    description: "iPhone быстро разряжается? Или не работает батарея? В Service-iPhone быстро найдут причину неполадки и сделают качественный ремонт",
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
    description: "Не работает камера? Необходимо произвести диагностику дивайся, и заменить камеру. В Service-iPhone Работаю професионалы которые могут заменить камеру за считаные минуты.",
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
    description: "Пропал звук? Попробуйте перезагрузить телефон, если проблема не решиться необходимо делать диагностику устройства",
    keywords: "Замена разговорного динамика iPhone 4, Замена динамика айфон 4 в Киеве, Ремонт динамика iPhone 4",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/zamena-razjoma-dlja-naushnikov', function (req, res, next) {
  res.render('pages/iphones/iphone4/zamena-razjoma-dlja-naushnikov', {
    title: "Замена разъёма для наушников (аудиоджека) iPhone 4 | Service-iPhone",
    description: "Сломался разьем для наушников? В Service-iPhone устрнят даную неприятность за считаные минуты.",
    keywords: "Замена разъёма для наушников iPhone 4, Киев, ремонт айфон 4 разьем для наушников",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone4/zamena-stekla', function (req, res, next) {
  res.render('pages/iphones/iphone4/zamena-stekla', {
    title: "Замена стекла (тачскрина) iPhone 4 в Киеве | Service-iPhone",
    description: "Качественная замена стекла (дисплея) на iPhone 4 в Киеве. от 200 грн. Ремонт от 20 минут.",
    keywords: "Замена стекла iphone 4, замена экрана iphone 4, Киев, замена дисплея iPhone 4, экрана",
    menuActive: 'iphone'
  });
});

//======================
//    iPhone 4s
//======================
router.get('/remont-iphone4s', function (req, res, next) {
  res.render('pages/iphones/iphone4s', {
    title: "Ремонт iPhone 4s",
    description: "Service-iphone сделает качественный ремонт iphone 4s в Киеве с гарантией не менее 6 месяцев. Замена батареи, аккумулятора, стекла/экрана.",
    keywords: "Ремонт iPhone 4s, ремонт айфона 4s, Киев, замена стекла iPhone 4s",
    menuActive: 'iphone'
  });
});

//======================
//    iPhone 5
//======================


router.get('/remont-iphone5', function (req, res, next) {
  res.render('pages/iphones/iphone5', {
    title: "Ремонт iPhone 5 в Киеве | Сервисный центр Apple - Service-iPhone",
    description: "В нашем СЦ сделают быстрый ремонт iPhone 5. Замена стекла, экрана, аккумулятора в течении суток!",
    keywords: "Ремонт iPhone 5, ремонт айфона 5, Киев, замена стекла, дисплея, экрана, ремонт аккумулятора, батареи",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-5/zamena-stekla', function (req, res, next) {
  res.render('pages/iphones/iphone5/zamena-stekla', {
    title: "Замена стекла iPhone 5 в Киеве | Service-iPhone",
    description: "Качественная замена стекла (дисплея) на iPhone 5 в Киеве. Бесплатная диагностика. Дешевые цены.",
    keywords: "Замена стекла iphone 5, замена экрана iphone 5, Киев, замена дисплея iPhone 5, экрана",
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

//iphone 6

router.get('/remont-iphone-6', function (req, res, next) {
  res.render('pages/iphones/iphone6', {
    title: "Ремонт iPhone 6 в Киеве | Сервисный центр Apple - Service-iPhone",
    description: "Требуется ремонт iphone 6? Мы вам поможем, проведем бесплатную диагностику и качественно сделаем ремонт iphone 6 в Киеве",
    keywords: "Ремонт iPhone 6, Киев, замена стекла, экрана, дисплея",
    menuActive: 'iphone'
  });
});

router.get('/remont-iphone-6/zamena-stekla', function (req, res, next) {
  res.render('pages/iphones/iphone6/zamena-stekla', {
    title: "Замена стекла iPhone 6 в Киеве | Service-iPhone",
    description: "Качественная замена стекла (дисплея) на iPhone 5 в Киеве. Бесплатная диагностика. Дешевые цены.",
    keywords: "Замена стекла iphone 6, Киев, замена экрана iphone 6, экрана, замена стекла iphone 6 Киев",
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






module.exports = router;
