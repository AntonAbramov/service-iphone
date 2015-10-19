//Load common code that includes config, then load the app logic for this page.
requirejs([
  './config',
  './modules/navigation',
  './modules/courier'
], function (config, Nav, Courier) {
  'use strict';


  Nav.init();
  Courier.init();


});