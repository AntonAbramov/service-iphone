import domHelper from './helpers/domHelper';
import Nav from './modules/navigation';
import Courier from './modules/courier';
import Feedback from './pages/feedback';
import Landing from './pages/landing';
Nav.init();
Courier.init();
if (document.getElementById('comments-form')) {
  Feedback.init();
}

if (document.getElementById('stepsforform')) {
  Landing.init();
}


