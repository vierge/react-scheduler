import React from 'react'
import "./styles.scss"

import Header from './header'
import Show from './show'
import Empty from './empty'
import useVisualMode from '../../hooks/useVisualMode'
import Form from './form'



export default function Appointment(props) {

  const { time, interview } = props;
  const SHOW = "SHOW"
  const EMPTY = "EMPTY"
  const CREATE = "CREATE"
  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );


  console.log(interview);

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={event => transition(CREATE)}/>}
      {mode === CREATE &&
        <Form
          interviewers={[]}
          onSave={(event) => transition(SHOW)}
          onCancel={(event) => transition(EMPTY)}
        />}
      {mode === SHOW &&
        <Show student={interview.student} interviewer={interview.interviewer.name} />
      }

    </article>
  )

}