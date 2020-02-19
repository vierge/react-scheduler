import React from 'react'
import InterviewerListItem from "./InterviewerListItem"
import "./InterviewerList.scss"


export default function InterviewerList(props) {
  const { interviewers, interviewer, setInterviewer } = props;

  const mappedInterviewerList = interviewers.map(thisInterviewer => {
    return (
      <InterviewerListItem
        id={thisInterviewer.id}
        name={thisInterviewer.name}
        avatar={thisInterviewer.avatar}
        selected={thisInterviewer.id === interviewer}
        setInterviewer={setInterviewer}
      />
    )
  })

  return (
    <ul>
      {mappedInterviewerList}
    </ul>
  )
}