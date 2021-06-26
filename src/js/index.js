import '../index.html';
import '../css/style.css';
import '../sass/style.scss';
import { Calendar } from './Calendar/Calendar';


// const calendar = new Calendar('railway-calendar', {
//   arrowPrev: '.calendar__handler-button_prev',
//   arrowNext: '.calendar__handler-button_next',
//   daysWrapper: '.calendar__days',
//   monthElement: '.month',
//   yearElement: '.year',
//   startWeek: 1,
// });

const calendar = new Calendar('railway-calendar', {
  arrowPrev: '.calendar__handler-button_prev',
  arrowNext: '.calendar__handler-button_next',
  daysWrapper: '.calendar__days',
  monthElement: '.month',
  yearElement: '.year',
  startWeek: 1,
});

calendar.init();

let date = new Date();



