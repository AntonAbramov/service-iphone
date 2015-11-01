define([
  'helpers/domHelper'
], function (domHelper) {
  'use strict';

  var imgs;

  function init() {
    cacheDom();
    bindEvents();
  }

  function cacheDom() {
    imgs = document.querySelectorAll('[data-lazy]');
  }

  function bindEvents () {
    if (imgs) {
      for (var i = 0; i < imgs.length; i++) {
        imgs[i].setAttribute('src', imgs[i].getAttribute('data-lazy'));
        imgs[i].removeAttribute('data-lazy');
      }
    }
  }


  return {
    init: init
  }
});