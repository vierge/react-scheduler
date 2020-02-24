import React, { useState, useEffect } from "react";
import axios from 'axios';


import DayList from "./DayList"
import Appointment from "components/Appointment/index.jsx"
import { getAppointmentsForDay, getInterview } from "helpers/selectors";


import "components/Application.scss";

export default function Application(props) {
  
  // create State
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })
  
  // init setDay
  const setDay = day => setState(prev => ({...prev, day}))

  //define effect
  useEffect(() => {
    Promise.all([
      axios.get('api/days'),
      axios.get('api/appointments'),
      axios.get('api/interviewers')
    ])
    .then(res => {
      const [days, appointments, interviewers ] = res 
      setState(prev => ({ days: days.data, appointments: appointments.data, interviewers: interviewers.data }));
    })
    .catch(err => console.log(err, err.stack));
  }, []);

  //retrieve appointments according to current day
  const appointments = getAppointmentsForDay(state, state.day);

  //map the schedule for display
  const mappedSchedule = appointments.map(thisAppt => {
    thisAppt.interview = getInterview(state, thisAppt.interview);

    return(
    <Appointment key={thisAppt.id} {...thisAppt} />
    )
  })
  
  // console.log(state.interviewers);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="/images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList 
            days={state.days}
            day={state.day}
            setDay={setDay}
          /> 
            
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />

      </section>
      <section className="schedule">
        {mappedSchedule}
      </section>
    </main>
  );
}
