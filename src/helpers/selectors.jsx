import React from 'react';

export function getAppointmentsForDay(state, day) {
  const result = [];
  const thisDay = state.days.filter(element => {
    return element.name === day;
  })[0];

  if (thisDay) {

    for (let key in state.appointments) {
      if (thisDay.appointments.includes(key * 1)) {
        console.log(`pushing ${state.appointments[key]}`);
        result.push(state.appointments[key]);
      }
    }
  }
  return result;
}