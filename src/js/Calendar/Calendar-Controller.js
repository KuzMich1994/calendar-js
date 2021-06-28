import { clickToDate } from "./click-to-date";

export class CalendarController {
  constructor(date, monthElement, yearElement, startWeek, daysWrapper, eventsData) {
    this.daysWrapper = daysWrapper;
    this.monthElement = monthElement;
    this.yearElement = yearElement;
    this.date = date;
    this.month;
    this.year;
    this.startWeek = startWeek;
    this.calendarDay;
    this.eventsData = eventsData;
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

  setDate() {
    this.date.setDate(1);
  }

  setMonthYear() {
    this.month = this.date.getMonth();
    this.year = this.date.getFullYear();
  }

  renderMonthYear() {
    this.setMonthYear();
    this.monthElement.textContent = `${this.months[this.month]}\n`;
    this.yearElement.textContent = `${this.year}`;
  }



  renderCalendar(date) {
    this.setDate();
    let days = '';
    const lastDay = 
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = 
    new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const lastDayIndex = 
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay() - this.startWeek;
    

    let nextDays = 13 - lastDayIndex;

    let firstDayIndex = date.getDay() - this.startWeek;
    
    if (firstDayIndex < 0) {
      firstDayIndex = date.getDay() + 7 - this.startWeek;
    }
    console.log('firstDayIndex: ', firstDayIndex);
    

    for (let x = firstDayIndex; x > 0; x--) {
      days += `<span class="calendar__day calendar__day-prev-date calendar__day-disable">${prevLastDay - x + 1}</span>`;
    }

    for (let i = 1; i <= lastDay; i++) {
      // const dayOfEvent = new Date().getDay(i);
      // console.log('dayOfEvent: ', dayOfEvent);
      console.log();
      if (i === new Date().getDate() && this.date.getMonth() === new Date().getMonth()) {
        days += `<span 
        class="calendar__day calendar__day_today" 
        data-date="${this.date.getFullYear()}-${this.date.getMonth() < 10 ? '0' + (this.date.getMonth() + 1) : (this.date.getMonth() + 1)}-${i < 10 ? '0' + i : i}">${i}</span>`;
      } else {
        days += `<span 
        class="calendar__day" 
        data-date="${this.date.getFullYear()}-${this.date.getMonth() < 9 ? '0' + (this.date.getMonth() + 1) : (this.date.getMonth() + 1)}-${i < 10 ? '0' + i : i}">${i}</span>`;
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      days += `<span class="calendar__day calendar__day-next-date calendar__day-disable">${j}</span>`;
      this.daysWrapper.innerHTML = days;
    }

    this.daysInHTML = document.querySelectorAll('.calendar__day');
        
    for (let k = this.daysInHTML.length; k > 41; k--) {
      if (this.daysInHTML[k]) {
        this.daysInHTML[k].remove();
      }
    }

    clickToDate(this.daysWrapper);
  }

  bindEventListeners(arrowPrev, arrowNext) {
    // this.calendarDay = document.querySelectorAll('.calendar__day');
    this.renderCalendar(this.date);
    arrowPrev.addEventListener('click', () => this._changeMinus(this.date));
    arrowNext.addEventListener('click', () => this._changePlus(this.date));
  }

  _addTargetDay(e) {
    
  }

  getEventsData() {
    const calendarDays = document.querySelectorAll('.calendar__day:not(.calendar__day-prev-date, .calendar__day-next-date)');
    
    for (let i = 0; i < calendarDays.length; i++) {
      if (i < new Date().getDate() - 1) {
        calendarDays[i].classList.add('event__prev');
      }
      if (i > new Date().getDate() - 1) {
        calendarDays[i].classList.add('event__next')
      }
      if (i === new Date().getDate() - 1 && this.date.getMonth() === new Date().getMonth()) {
        calendarDays[i].classList.remove('event__prev');
        calendarDays[i].classList.add('event__today');
      }
    }
  }

  setEvents() {
    const daysWithEvent = document.querySelectorAll('[data-date]');
    this.eventsData.forEach(eventData => {
      daysWithEvent.forEach(day => {
        console.log(day.dataset.date === eventData.start);
        if (day.dataset.date === eventData.start) {
          day.classList.add('event');
        }
      });
    });
  }

  _changeMinus(date) {
    this.setDate();
    date.setMonth(date.getMonth() - 1);
    this.renderMonthYear();
    this.renderCalendar(date);
    this.getEventsData();
    this.setEvents();
  }

  _changePlus(date) {
    this.setDate();
    date.setMonth(date.getMonth() + 1);
    this.renderMonthYear();
    this.renderCalendar(date);
    this.getEventsData();
    this.setEvents();
  }
}