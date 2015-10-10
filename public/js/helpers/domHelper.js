define(function () {
  'use strict';

  /*
    Donors:
    https://github.com/julienw/dollardom/blob/master/src/dollardom.js
    http://youmightnotneedjquery.com/
  */

  /*
    Add class to a dom element
  */
  function _addClass(el, className) {
    if (!_hasClass(el, className)) {
      if (el.classList) {
        el.classList.add(className);
      } else {
        el.className += ' ' + className;
      }
    }

    return el;
  }

  /*
    Check if dom element has a class
  */
  function _hasClass(el, className) {
    if (el.classList) {
      return el.classList.contains(className);
    }

    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }

  /*
    Remove class of dom element
  */
  function _removeClass(el, className) {
    if (_hasClass(el, className)) {
      if (el.classList) {
        el.classList.remove(className);
      } else {
        el.className = el.className.replace(new RegExp('(^|\\s)' + className + '(\\s|$)'), ' ').replace(/\s$/, '');
      }
    }

    return el;
  }

  /*
    Find closest element. Searching upwards.
  */
  function _closest(el, selector) {
    var matchesFn,
        parent;

    [ 'matches',
      'webkitMatchesSelector',
      'mozMatchesSelector',
      'msMatchesSelector',
      'oMatchesSelector'].some(function(fn) {
        if (typeof document.body[fn] === 'function') {
          matchesFn = fn;
          return true;
        }
        return false;
      });

    while (el !== null) {
      parent = el.parentElement;
      if (parent !== null && parent[matchesFn](selector)) {
        return parent;
      }
      el = parent;
    }

    return null;
  }

  /*
    Insert HTML in dom element on the last position
  */
  function _appendHTML(el, html) {
    el.insertAdjacentHTML('beforeend', html);
    return el;
  }

  /*
    Remove dom element
  */
  function _remove(el) {
    return el.parentNode.removeChild(el);
  }

  /*
    Iterate dom elements of HTMLCollection
  */
  function _forEach(collection, fn) {
    Array.prototype.forEach.call(collection, fn);
  }

  /*
    Creates a new array based on fn called for each element of passed collection
  */
  function _map(collection, fn) {
    return Array.prototype.map.call(collection, fn);
  }

  return {
    addClass: _addClass,
    hasClass: _hasClass,
    removeClass: _removeClass,

    closest: _closest,

    appendHTML: _appendHTML,
    remove: _remove,

    forEach: _forEach,
    map: _map
  };
});