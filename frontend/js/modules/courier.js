import Helper from '../helpers/domHelper';
const $ = require('jquery')
//import $ from '../libs/jquery-2.1.4.min';


var domHelper = new Helper();

  var overlay,
    callCourierBtn,
    modal,
    form,
    textarea,
    submitBtn,
    closeBtn,
    body,
    text;

  function init() {
    cacheDom();
    bindEvents();
  }

  function cacheDom() {
    overlay = document.getElementById('overlay-courier');
    modal = document.getElementById('courier');
    callCourierBtn = document.getElementById('call-courier');
    form = document.getElementById('courier-form');
    closeBtn = overlay.querySelector('.btn-close');
    textarea = form.querySelector('textarea');
    submitBtn = form.querySelector('.sbm');
    text = 'Примечание';
    body = document.body;

  }

  function bindEvents() {

    if (callCourierBtn) {
      callCourierBtn.addEventListener('click', openCourierModal);
    }


    overlay.addEventListener('click', closeCourierModal);
    closeBtn.addEventListener('click', closeModal);

    form.addEventListener('submit', sbmForm);

    textarea.addEventListener('focus', textAreaFocus);

    textarea.addEventListener('blur', textAreaBlur);
  }

  function openCourierModal(e) {
    e.preventDefault();
    overlay.style.display = 'block';
    setTimeout(function () {
      domHelper.addClass(body, 'courier-open');
    }, 100);
  }

  function closeCourierModal(e) {
    if (domHelper.closest(e.target, '#courier') || e.target.getAttribute('id') === 'courier') {
      // do something
    } else {
      closeModal(e);
    }
  }

  function closeModal(e) {
    e.preventDefault();
    e.stopPropagation();
    domHelper.removeClass(body, 'courier-open');
    setTimeout(function () {
      overlay.style.display = 'none';
    }, 300);
  }

  function textAreaFocus(e) {
    if (e.currentTarget.value === text) {
      e.currentTarget.value = '';
      e.currentTarget.style.color = '#000';
    }
  }

  function textAreaBlur(e) {
    if (e.currentTarget.value === '') {
      e.currentTarget.value = text;
      e.currentTarget.style.color = '#929292';
    } else {
      e.currentTarget.style.color = '#000';
    }
  }

  function sbmForm(e) {
    e.preventDefault();
    var formLength = form.length - 1,
      data = '';
    for (var i = 0; i < formLength; i++) {
      data += form[i].getAttribute('name') + '=' + form[i].value + '&';
    }

    $.ajax({
      type: 'POST',
      url: '/call-courier',
      data: data
    }).done(function (res) {
      if (res === 'success') {

          form.innerHTML = '<div style="color: green; text-align:center;">Мы вам перезвоним в течении 5 мин! </div>';
          setTimeout(function(){
            closeModal(e);
          }, 4000);

      } else {
        $(form).prepend('Opps something wend wrong');
      }
    });
  }

  export default {
    init: init
  }
