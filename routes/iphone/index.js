var express = require('express');
var router = express.Router();

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

router.get('/remont-iphone5', function (req, res, next) {
  res.render('pages/iphones/iphone5', {
    title: "Ремонт iPhone 5 в Киеве | Сервисный центр Apple - Service-iPhone",
    description: "В нашем СЦ сделают быстрый ремонт iPhone 5. Замена стекла, экрана, аккумулятора в течении суток!",
    keywords: "Ремонт iPhone 5, ремонт айфона 5, Киев, замена стекла, дисплея, экрана, ремонт аккумулятора, батареи",
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
    title: "Ремонт iPhone 3g/3gs/4/4s/5/5s/6 оригинальные запчасти",
    description: "Качественная замена стекла (дисплея) на iPhone 5 в Киеве. Бесплатная диагностика. Дешевые цены.",
    keywords: "Замена стекла iphone 6, Киев, замена дисплея iPhone 6, экрана",
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
