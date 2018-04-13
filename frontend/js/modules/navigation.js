import Helper from '../helpers/domHelper';

var domHelper = new Helper();

export default (function() {
  'use strict';
  function _init() {
    _bindEvents();
  }

  function _bindEvents () {
    document.getElementById('navbar-toggle').addEventListener('click', _toggleNav, false);
  }

  function _toggleNav(e) {
    e.preventDefault();
    var header = document.getElementById('header');
    if (domHelper.hasClass(header, 'is-nav-open')) {
      domHelper.removeClass(header, 'is-nav-open');
    } else {
      domHelper.addClass(header, 'is-nav-open');
    }
  }

  return {
    init: _init
  };

})();