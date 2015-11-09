//Load common code that includes config, then load the app logic for this page.
requirejs([
  './config',
  './helpers/domHelper',
  './modules/navigation',
  './modules/courier',
  './modules/lazy',
  './pages/feedback'
], function (config, domHelper, Nav, Courier, Lazy, Feedback) {
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
  Feedback.init();


});