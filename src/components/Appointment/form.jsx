import React, { useState } from 'react'
import Button from '../Button'
import InterviewerList from '../InterviewerList'


export default function Form(props) {

  const { interviewers, onSave, onCancel } = props;
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  function cancel() {
      function reset() {
        setInterviewer(null);
        setName("");
      }
    reset();
    onCancel();
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            value={name}
            type="text"
            placeholder="Enter Student Name"
            onChange={(event) => setName(event.target.value)}
            onSubmit={(event) => event.preventDefault()}
          />
        </form>
        <InterviewerList interviewers={interviewers} interviewer={interviewer} setInterviewer={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={(event) => cancel()} danger>Cancel</Button>
          <Button onClick={(event) => onSave(name, interviewer)} confirm>Save</Button>
        </section>
      </section>
    </main>

  )

}