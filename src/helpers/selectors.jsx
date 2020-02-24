export function getAppointmentsForDay(state, day) {
  const result = [];
  const thisDay = state.days.filter(element => {
    return element.name === day;
  })[0];

  if (thisDay) {

    for (let key in state.appointments) {
      if (thisDay.appointments.includes(key * 1)) {
        result.push(state.appointments[key]);
      }
    }
  }
  return result;
}

export function getInterview(state, interview) {
  let results = null;
  console.log({state, interview});
  if (interview !== null) {
    results = {
      student: interview.student,
      interviewer: state.interviewers[`${interview.interviewer}`]
    };
  }
  return results;
}