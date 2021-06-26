import { CalendarController } from "./Calendar-Controller";
import { clickToDate } from "./click-to-date";

export class Calendar {
  constructor(initId, {
    startWeek = 1,
    arrowNext,
    arrowPrev,
    monthElement,
    yearElement,
    daysWrapper,
  }) {
    this.initId = document.getElementById(initId);
    this.startWeek = startWeek;
    this.arrowNext = document.querySelector(arrowNext);
    this.arrowPrev = document.querySelector(arrowPrev);
    this.monthElement = document.querySelector(monthElement);
    this.yearElement = document.querySelector(yearElement);
    this.daysWrapper = document.querySelector(daysWrapper);
    this.date = new Date();
    this.month;
    this.year;
    this.days = document.querySelectorAll('.calendar__day');
    this.weekDays = [
      {
        ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
      }
    ];
    this.months = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь'
    ];
  }

  init() {
    const controller = new CalendarController(this.date, this.monthElement, this.yearElement, this.startWeek, this.daysWrapper);
    controller.renderMonthYear();
    controller.bindEventListeners(this.arrowPrev, this.arrowNext);
    clickToDate(this.daysWrapper);
  }
}