import React from 'react';

const CalendarItem = ({ dayInMonth, curretDate, value }) => {
  const currentMonth = [...Array(dayInMonth)].map((_, i) => i);

  return currentMonth.map((el, idx) => {
    return (
      <div key={idx} className="">
        <div
          className={`w-[50px] h-[50px] m-2 rounded-lg ${
            curretDate === idx + 1 ? 'bg-green-400' : 'bg-gray-300'
          }`}
        >
          {el + 1}
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
