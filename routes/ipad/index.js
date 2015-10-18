var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('pages/ipads/index', {
    title: "Ремонт iPad, iPad Mini, iPad Retina iPad Air оригинальные запчасти",
    description: "Профессиональный ремонт iPad в Киеве! Качественный ремонт айпадов всех моделей, доступные цены, хорошее качество!",
    keywords: "ремонт ipad (айпад), ремонт ipad mini, ipad retina Киев"
  });
});

module.exports = router;
