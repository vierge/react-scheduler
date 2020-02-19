import React from 'react'
import "./styles.scss"

import Header from './header'
import Show from './show'
import Empty from './empty'

export default function Appointment (props) {

  const { time, interview } = props;
  console.log(interview);

  return(
   <article className="appointment">
     <Header time={time} />
     {interview ? 
       <Show student={interview.student} interviewer={interview.interviewer.name} /> :
       <Empty />
     }
   </article>
  )

}