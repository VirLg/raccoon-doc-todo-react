import moment from 'moment';
import React from 'react';
import CalendarItem from './CalendarItem';

const Calendar = () => {
  const date = moment().calendar();
  const dayInMonth = moment().daysInMonth();
  const currentWeek = moment().isoWeek();
  const dayOfWeek = moment().day();
  const currentDate = moment().date();
  // console.log('currentWeek', currentWeek);
  // console.log(' dayOfWeek', dayOfWeek);
  // console.log(' currentDate', currentDate);
  let firstWeek = [];
  const arrCurrentWeek = [];
  for (let i = 1; i < 8; i += 1) {
    if (i === dayOfWeek) {
      arrCurrentWeek.push(currentDate);
    } else if (i < dayOfWeek) {
      arrCurrentWeek.push(currentDate - dayOfWeek + i);
    } else {
      arrCurrentWeek.push(currentDate + i - dayOfWeek);
    }
  }

  const beforeWeek = [];
  for (let i = 1; i < arrCurrentWeek[0]; i += 1) {
    beforeWeek.push(i);
  }
  if (beforeWeek.length < 7) {
    const arrayEmpty = new Array(7 - beforeWeek.length);
    firstWeek = [...arrayEmpty, ...beforeWeek];
  }

  const afterWeek = [];
  for (let i = arrCurrentWeek[6]; i < dayInMonth; i += 1) {
    afterWeek.push(i + 1);
  }
  const lastWeek = () => {};
  const a = 9 % 7;
  console.log(a);

  const curretMonts = [...firstWeek, ...arrCurrentWeek];

  const curretDate = moment().date();
  const countDaysBeforeMonth = moment().weekday();
  const currentNumberDay = moment().day();
  // const curretDate = moment().weekday(Number);
  const curretWeek = moment().week(Number);

  // console.log('first', curretMonts);
  const montth = moment().weekday();

  //const  selectDate=
  //const  selectWeek=
  // const selectMonts=

  // numberWeek

  return (
    <div className="max-w-[860px] pt-[30px]">
      <h2 className="justify-center">Month</h2>
      <div className="flex flex-wrap  max-w-[462px] ml-auto mr-auto">
        <CalendarItem
          dayInMonth={dayInMonth}
          curretDate={curretDate}
          countDaysBeforeMonth={countDaysBeforeMonth}
          arrCurrentWeek={arrCurrentWeek}
          curretMonts={curretMonts}
        />
      </div>
    </div>
  );
};
export default Calendar;
