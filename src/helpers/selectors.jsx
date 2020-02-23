
export function getAppointmentsForDay (state, day) {
  
  const thisDay = state.days.filter(thisDay => {
    if (thisDay.name === day) {
    return thisDay.appointments === day;
    }
  })

  console.log(thisDay[0].appointments);

}