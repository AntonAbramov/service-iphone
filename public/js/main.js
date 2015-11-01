//Load common code that includes config, then load the app logic for this page.
requirejs([
  './config',
  './helpers/domHelper',
  './modules/navigation',
  './modules/courier'
], function (config, domHelper, Nav, Courier) {
  'use strict';


  Nav.init();
  Courier.init();

});