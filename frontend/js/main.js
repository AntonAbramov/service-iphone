import domHelper from './helpers/domHelper';
import Nav from './modules/navigation';
import Courier from './modules/courier';
import Landing from './pages/landing';

import slider from './slider';
//Courier.init();


document.addEventListener('DOMContentLoaded', ()=>{
  Nav.init();
  slider.init();
})

if (document.getElementById('stepsforform')) {
  Landing.init();
}