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

import DayListItem from "components/DayListItem"

storiesOf("DayListItem", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Unselected", () => <DayListItem name="Monday" spots={5} />)
  .add("Selected", () => <DayListItem name="Monday" spots={5} selected />)
  .add("Full", () => <DayListItem name="Monday" spots= {0} />)
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
