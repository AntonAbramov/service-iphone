const $ = require('jquery')
  let sbmCommentButton,
      textarea,
      text,
      form,
      formAction;

  function init() {
    _cacheDom();
    _checkComments();
    _bindEvents();
  }

  function _cacheDom() {
    sbmCommentButton = document.getElementById('sbm-comment');
    form = document.getElementById('comments-form');
    formAction = form.getAttribute('action');
    textarea = document.getElementById('comments-textarea');
    text = 'Ваш комментарий...'
  }
  
  function _checkComments () {
    if (localStorage.isCommented === true) {
      form.style.display = 'none';
    }
  }

  function _bindEvents () {
    form.addEventListener('submit', sbmForm);
    textarea.addEventListener('focus', _textAreaFocus);
    textarea.addEventListener('blur', _textAreaBlur);
  }

  function _textAreaFocus (e) {
    if (e.currentTarget.value === text) {
      e.currentTarget.value = '';
      e.currentTarget.style.color = '#000';
    }
  }

  function _textAreaBlur (e) {
    if (e.currentTarget.value === '') {
      e.currentTarget.value = text;
      e.currentTarget.style.color = '#929292';
    } else {
      e.currentTarget.style.color = '#000';
    }
  }

  function sbmForm(e) {
    e.preventDefault();

    let d = new Date();
    let options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timezone: 'UTC'
    };
    let currentDate = d.toLocaleString("ru", options);

    $.ajax({
      type: 'POST',
      url: formAction,
      data: $(form).serialize() + '&date=' + currentDate
    }).done(function (res) {
      if (res === 'success') {
        localStorage.isCommented = true; 
        form.innerHTML = '<h1 class="color-success text-center">Ваше мнение важно для нас! <br />Комментарий будет добавлен после модерации. </h1>'
      } else {
        console.log('some error');
        //$(form).prepend('Opps something wend wrong');
      }
    });
  }

  export default {
    init: init
  }
