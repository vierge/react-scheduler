import React from 'react';
import DayListItem from "./DayListItem"

export default function DayList(props) {
  const { days } = props; //days:Array, day:Array, setDay:function

  const mappedDayList = days.map(day => {
    return( <DayListItem
      name={day.name}
      spots={day.spots}
      selected={day.name === day}
      setDay={props.setDay}
      />
    )
  });
  
  return(
    <ul>
      {mappedDayList}
    </ul>
)};