(function (requirejs) {
  'use strict';

  requirejs.config({
    baseUrl: 'js'
  });

  requirejs.onError = function (err) {
    console.log(err);
  };

})(requirejs);