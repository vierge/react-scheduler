import React from 'react';
import DayListItem from "./DayListItem"

export default function DayList(props) {
  const { days, day, setDay } = props; //days:Array, day:Array, setDay:function

  const mappedDayList = days.map(thisDay => {
    return( <DayListItem
      key={thisDay.id}
      name={thisDay.name}
      spots={thisDay.spots}
      selected={thisDay.name === day}
      setDay={setDay}
      />
    )
  });
  
  return(
    <ul>
      {mappedDayList}
    </ul>
)};