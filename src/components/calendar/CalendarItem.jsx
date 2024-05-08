import React from 'react';

const CalendarItem = ({ curretDate, curretMonth }) => {
  console.log('currentMonth', curretMonth);
  return curretMonth.map((el, idx) => {
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
