import React from 'react';
import "./InterviewerListItem.scss"
import classNames from 'classnames';
//takes the following props:
// id:number
// name:string
// avatar:url
// selected:boolean
// setInterviewer:function

export default function InterviewerListItem(props) {

  const { name, avatar, selected, setInterviewer } = props;

  const interviewerClass = ["interviewers__item", {"interviewers__item--selected": selected}];

  return(
    <li className={classNames(interviewerClass)} onClick={setInterviewer}>
  <img
    className="interviewers__item-image"
    src={avatar}
    alt={name}
  />
  {selected && name}
</li>
  )
};