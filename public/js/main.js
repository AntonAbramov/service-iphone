//Load common code that includes config, then load the app logic for this page.
requirejs([
  './config',
  './helpers/domHelper',
  './modules/navigation',
  './modules/courier',
  './modules/lazy',
  './pages/feedback',
  './pages/landing'
], function (config, domHelper, Nav, Courier, Lazy, Feedback, Landing) {
  'use strict';


  /*function loadCss(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
  }*/

//  loadCss('css/style.css');
  Nav.init();
  Lazy.init();
  Courier.init();
  if (document.getElementById('comments-form')) {
    Feedback.init();
  }

  if (document.getElementById('stepsforform')) {
    Landing.init();
  }


});