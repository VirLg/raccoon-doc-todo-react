import moment from 'moment';
import React from 'react';
import CalendarItem from './CalendarItem';

const Calendar = () => {
  const curretDate = moment().date();
  const dayInMonth = moment().daysInMonth();
  const dayOfWeek = moment().day();
  const currentDate = moment().date();
  let firstWeek = [];
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
  const beforeWeek = [];
  for (let i = 1; i < arrCurrentWeek[0]; i += 1) {
    beforeWeek.push(i);
  }

  if (!(currentDate % 7 === 0))
    firstWeek = [...new Array(dayOfWeek - 1), ...beforeWeek];

  const curretMonth = [...firstWeek, ...arrCurrentWeek];
  const m = moment().format('Y-MM-DD');
  console.log('m', m);
  return (
    <div className="max-w-[860px] pt-[30px]">
      <h2 className="justify-center">Month</h2>
      <div className="flex flex-wrap  max-w-[462px] ml-auto mr-auto">
        <CalendarItem curretDate={curretDate} curretMonth={curretMonth} />
      </div>
    </div>
  );
};
export default Calendar;
