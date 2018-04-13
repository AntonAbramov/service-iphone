import Swipe from './swipe';

let slider;
let nextBtn;
let prevBtn;

function _cacheDom() {
  nextBtn = document.getElementById('next');
  prevBtn = document.getElementById('prev');
}

function _bindEvents() {
  document.addEventListener('touchmove', (event)=>{});
  nextBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    let el = e.currentTarget;
    if (el.hasAttribute('disabled')) {
      return;
    } else {
      el.setAttribute('disabled', 'disabled');
      slider.next();
      setTimeout(()=>{
        el.removeAttribute('disabled');
      }, 400)
    }

  });

  prevBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    let el = e.currentTarget;
    if (el.hasAttribute('disabled')) {
      return
    } else {
      el.setAttribute('disabled', 'disabled');
      slider.prev();
      setTimeout(()=>{
        el.removeAttribute('disabled');
      }, 400)
    }
  });

  document.addEventListener('keydown', (event)=>{
    if(event.keyCode === 37) {
      prevBtn.click()
    } else if (event.keyCode === 39) {
      nextBtn.click()
    }
  })
}

function _render() {
  slider = Swipe(document.getElementById('slider'), {
    startSlide: 0,
    speed: 400,
    auto: 8000,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    transitionEnd: function(index, elem) {

    }
  });
}

function init () {
  _cacheDom();
  _bindEvents();
  _render();
}

export default {
  init : init
};
