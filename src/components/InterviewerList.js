import React from 'react'
import InterviewerListItem from "./InterviewerListItem"
import "./InterviewerList.scss"


export default function InterviewerList(props) {
  const { interviewers, interviewer, setInterviewer } = props;

  const mappedInterviewerList = interviewers.map(thisInterviewer => {
    return (
      <InterviewerListItem
        key={thisInterviewer.id}
        name={thisInterviewer.name}
        avatar={thisInterviewer.avatar}
        selected={thisInterviewer.id === interviewer}
        setInterviewer={(event) => setInterviewer(thisInterviewer.id)}
      />
    )
  })

  return (
    <>
      <header className="interviewers__header">Interviewer List</header>
      <ul className="interviewers__list">
        {mappedInterviewerList}
      </ul>
    </>
  )
}