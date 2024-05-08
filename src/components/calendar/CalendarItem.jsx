import React from 'react';

const CalendarItem = ({
  dayInMonth,
  curretDate,
  countDaysBeforeMonth,
  arrCurrentWeek,
  curretMonts,
}) => {
  const currentMonth = [
    // ...Array(countDaysBeforeMonth),
    ...Array(dayInMonth),
  ].map((_, i) => i);

  return curretMonts.map((el, idx) => {
    return (
      <div key={idx} className="">
        <div
          className={`w-[50px] h-[50px] m-2 rounded-lg ${
            curretDate === el ? 'bg-teal-500' : 'bg-gray-300'
          }`}
        >
          {el}
        </div>
      </div>
    );
  });
};

export default CalendarItem;

//   <div key={idx}>
//     <div>{date.day}</div>
//     <div>{date.time}</div>
//     <div>{value.task.name}</div>
//     <div>{value.task.time}</div>
//   </div>;
