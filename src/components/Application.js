import React, { useState, useEffect } from "react";
import axios from 'axios';


import DayList from "./DayList"
import Appointment from "components/Appointment/index.jsx"


import "components/Application.scss";



const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "2pm",
    interview: {
      student: "Mom",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 4,
    time: "4pm"
  },
  {
    id: 5,
    time: "last" 
  }
];

export default function Application(props) {
  const [day, setDay] = useState("Monday");
  const [days, setDays] = useState([]);

  useEffect(() => {
    axios.get('/api/days') 
    .then(res => {
      console.log({ days: res.data} );
      setDays(res.data);
    })
    .catch(err => console.log(err, err.stack));
  }, []);

  // const { appointments } = props;
  const mappedSchedule = appointments.map(thisAppt => {
    return(
    <Appointment key={thisAppt.id} {...thisAppt} />
    )
  })

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
            days={days}
            day={day}
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
