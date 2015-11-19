define([
  'helpers/domHelper'
], function (domHelper) {
  'use strict';
  function _init() {
    _bindEvents();
  }

  function _bindEvents () {
    document.getElementById('navbar-toggle').addEventListener('click', _toggleNav, false);
  }

  function _toggleNav(e) {
    e.preventDefault();
    var el = e.currentTarget,
      nav = document.getElementById('top-nav');
    if (domHelper.hasClass(el, 'is-open')) {
      domHelper.removeClass(el, 'is-open');
      domHelper.removeClass(nav, 'is-open');
    } else {
      domHelper.addClass(el, 'is-open');
      domHelper.addClass(nav, 'is-open');
    }
  }

  return {
    init: _init
  };

});