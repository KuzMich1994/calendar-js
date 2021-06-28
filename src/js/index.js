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

const events = [
  {
    start: '2021-06-23',
    name: 'test',
    eventUrl: 'https://vk.com/kuz.mich',
    description: 'blablabla',
  },
  {
    start: '2021-06-24',
    name: 'test1',
    eventUrl: 'https://vk.com/kuz.mich',
    description: 'blablabla',
  },
  {
    start: '2021-06-25',
    name: 'test2',
    eventUrl: 'https://vk.com/kuz.mich',
    description: 'blablabla',
  },
  {
    start: '2021-06-30',
    name: 'test2',
    eventUrl: 'https://vk.com/kuz.mich',
    description: 'blablabla',
  },
  {
    start: '2021-07-01',
    name: 'test2',
    eventUrl: 'https://vk.com/kuz.mich',
    description: 'blablabla',
  },
]

const calendar = new Calendar('railway-calendar', {
  arrowPrev: '.calendar__handler-button_prev',
  arrowNext: '.calendar__handler-button_next',
  daysWrapper: '.calendar__days',
  monthElement: '.month',
  yearElement: '.year',
  startWeek: 1,
  eventsData: events,
});

calendar.init();

let date = new Date();



