// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones,
(function (requirejs) {
  'use strict';

  requirejs.config({
    "baseUrl": "../js",
    "paths": {
      "jquery": "libs/jquery-2.1.4.min"
    },
    deps: ['main']/*,
     "shim": {
     "jquery.alpha": ["jquery"],
     "jquery.beta": ["jquery"]
     }*/
  });


})(requirejs);


// Load the main app module to start the app
//requirejs(["main"]);