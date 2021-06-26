export const clickToDate = (daysWrapper) => {
  const days = document.querySelectorAll('.calendar__day');
  
  const changeBackGround = index => {
    for (let i = 0; i < days.length; i++) {
      if (i === index) {
        days[i].classList.add('calendar__day_active');
      } else {
        days[i].classList.remove('calendar__day_active');
      }
    }
  }

  daysWrapper.addEventListener('click', e => {
    const target = e.target;

    if (target.matches('.calendar__day') && !target.classList.contains('calendar__day-disable')) {
      days.forEach((day, index) => {
        if (target === day) {
          changeBackGround(index);
        }
      });
    }
  });
};
