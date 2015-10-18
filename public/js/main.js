//Load common code that includes config, then load the app logic for this page.
requirejs([
  './config',
  './modules/navigation'
], function (config, Nav) {
  'use strict';


  Nav.init();

});