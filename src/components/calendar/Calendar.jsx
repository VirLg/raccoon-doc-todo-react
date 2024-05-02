import moment from 'moment';
import React from 'react';
import CalendarItem from './CalendarItem';

const Calendar = () => {
  const date = moment().calendar();

  // const curretDate = moment().daysInMonth();
  const dayInMonth = moment().daysInMonth();

  const curretDate = moment().date();

  const currentNumberDay = moment().day();
  // const curretDate = moment().weekday(Number);
  const curretWeek = moment().week(Number);
  const curretMonts = moment().month(); // Number

  //const  selectDate=
  //const  selectWeek=
  // const selectMonts=

  // numberWeek
  console.log('a', date);
  return (
    <div className="max-w-[860px] pt-[30px]">
      <h2 className="justify-center">Month</h2>
      <div className="flex flex-wrap  max-w-[462px] ml-auto mr-auto">
        <CalendarItem dayInMonth={dayInMonth} curretDate={curretDate} />
      </div>
    </div>
  );
};
export default Calendar;
// max-w-[480px]
