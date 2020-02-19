import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";

// import Task from "./Task";

// export const task = {
//   id:'1',
//   title:'Test Task',
//   state:"TASK_INBOX",
//   updatedAt: new Date(2018, 0, 1, 9, 0)
// };

// export const actions = {
//   onPinTask: action("onPinTask"),
//   onArchiveTask:action ("onArchiveTask")
// };

// storiesOf("Task", module)
//   .add("default", () => <Task task={task} {...actions} /> )
//   .add("pinned", () => <Task task={{...task, state: 'TASK_PINNED'}} {...actions} />)
//   .add("archived", () => <Task task={{...task, state: 'TASK_ARCHIVED'}} {...actions} />)

import DayList from "components/DayList"

const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];

storiesOf("DayList", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
  })
  .add("Monday", () => (
    <DayList days={days} day={"Monday"} setDay={action("setDay")} />
  ))
  .add("Tuesday", () => (
    <DayList days={days} day={"Tuesday"} setDay={action("setDay")} />
  ));

import DayListItem from "components/DayListItem"

storiesOf("DayListItem", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Unselected", () => <DayListItem name="Monday" spots={5} />)
  .add("Selected", () => <DayListItem name="Monday" spots={5} selected />)
  .add("Full", () => <DayListItem name="Monday" spots={0} />)
  .add("Clickable", () => (
    <DayListItem name="Tuesday" setDay={action("SetDay")} spots={5} />
  ));

import Button from "components/Button";

storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Base", () => <Button>Base</Button>)
  .add("Confirm", () => <Button confirm>Confirm</Button>)
  .add("Danger", () => <Button danger>Cancel</Button>)
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}>Clickable</Button>
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled
    </Button>
  ));

import InterviewerListItem from "components/InterviewerListItem.js"

const interviewer = {
  id: 1,
  name: "Sylvia Palmer",
  avatar: "https://i.imgur.com/LpaY82x.png"
};

storiesOf("InterviewerListItem", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Unselected", () => (
    <InterviewerListItem
      id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
    />
  ))
  .add("Selected", () => (
    <InterviewerListItem
      id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected
    />
  ))
  .add("Clickable", () => (
    <InterviewerListItem
      id={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      setInterviewer={event => action("setInterviewer")(interviewer.id)}
    />
  ));

import InterviewerList from "components/InterviewerList"

const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

storiesOf("InterviewerList", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Initial", () => (
    <InterviewerList
      interviewers={interviewers}
      setInterviewer={action("setInterviewer")}
    />
  ))
  .add("Preselected", () => (
    <InterviewerList
      interviewers={interviewers}
      interviewer={3}
      setInterviewer={action("setInterviewer")}
    />
  ));

import Appointment from "components/Appointment/index"
import Header from "components/Appointment/header"
import Empty from "components/Appointment/empty";
import Show from "components/Appointment/show";
import Confirm from "components/Appointment/confirm";
import Status from "components/Appointment/status";
import Error from "components/Appointment/error";
import Form from 'components/Appointment/form'

storiesOf("Appointment", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Appointment", () => <Appointment />)
  .add("Appointment With Time", () => <Appointment time="12pm" />)
  .add("Header", () => <Header time="12pm" />)
  .add("Empty", () => <Empty onAdd={action("onAdd")} />)
  .add("Show", () =>
    <Show
      student="Lydia Miller-Jones"
      interviewer="Sylvia Palmer"
      onEdit={action("onEdit")}
      onDelete={action("onDelete")}
    />
  )
  .add("Confirm", () =>
    <Confirm
      message="Delete The Appointment"
      onConfirm={action("onConfirm")}
      onCancel={action("onCancel")}
    />
  )
  .add("Status Deleting", () => <Status message="Deleting" />)
  .add("Status Loading", () => <Status message="Loading" />)
  .add("Error", () => <Error message="Could not delete Appointment... :(" onClose={action("onClose")} />)
  .add("Form Create", () => 
    <Form 
      interviewers={interviewers}
      onSave={action("onSave")}
      onCancel={action("onCancel")}
    />
    )
    .add("Form Edit", () => 
    <Form 
      name="Mara Gray"
      interviewers={interviewers}
      interviewer={3}
      onSave={action("onSave")}
      onCancel={action("onCancel")}
    />
    )