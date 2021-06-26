export class CalendarController {
  constructor(date, monthElement, yearElement, startWeek, daysWrapper) {
    this.daysWrapper = daysWrapper;
    this.monthElement = monthElement;
    this.yearElement = yearElement;
    this.date = date;
    this.month;
    this.year;
    this.startWeek = startWeek;
    this.calendarDay;
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
      if (i === new Date().getDate() && this.date.getMonth() === new Date().getMonth()) {
        days += `<span class="calendar__day calendar__day_today">${i}</span>`;
      } else {
        days += `<span class="calendar__day">${i}</span>`;
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
  }

  bindEventListeners(arrowPrev, arrowNext) {
    // this.calendarDay = document.querySelectorAll('.calendar__day');
    this.renderCalendar(this.date);
    arrowPrev.addEventListener('click', () => this._changeMinus(this.date));
    arrowNext.addEventListener('click', () => this._changePlus(this.date));
  }

  _addTargetDay(e) {
    
  }

  _changeMinus(date) {
    this.setDate();
    date.setMonth(date.getMonth() - 1);
    this.renderMonthYear();
    this.renderCalendar(date);
  }

  _changePlus(date) {
    this.setDate();
    date.setMonth(date.getMonth() + 1);
    this.renderMonthYear();
    this.renderCalendar(date);
  }
}