import moment from 'moment';
import React from 'react';
import CalendarItem from './CalendarItem';

const Calendar = () => {
  const curretDate = moment().date();
  const dayInMonth = moment().daysInMonth();

  const currentDate = moment().date();

  const arrCurrentWeek = [];
  for (let i = 1; i < dayInMonth + 1; i += 1) {
    if (i < currentDate) {
      arrCurrentWeek.push(i);
    } else if (i === currentDate) {
      arrCurrentWeek.push(currentDate);
    } else {
      arrCurrentWeek.push(i);
    }
  }

  if (!(currentDate % 7 === 0))
    firstWeek = [...new Array(dayOfWeek - 2), ...beforeWeek];

  const curretMonth = [...firstWeek, ...arrCurrentWeek];
  const m = moment().format('DD-MMM-dddd');

  return (
    <div className="max-w-[860px] pt-[30px]">
      <h2 className="ml-[100px]">{m}</h2>
      <div className="flex flex-wrap  max-w-[462px] ml-auto mr-auto">
        <CalendarItem curretDate={curretDate} curretMonth={curretMonth} />
      </div>
    </div>
  );
};
export default Calendar;
