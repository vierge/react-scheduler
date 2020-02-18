import React from 'react';
import classNames from 'classnames';

import "./DayListItem.scss";




export default function DayListItem(props) {

  const { name, spots, selected, setDay } = props;
  const dayClass = ["day-list__item", { "day-list__item--selected": selected, "day-list__item--full": spots === 0 }];
  const formatSpots = function() {
    return `${spots > 0 ? spots : "no"} spot${spots !== 1 ? "s" : ""} remaining`;
  }

  return (
    <li className={classNames(dayClass)} onClick={() => setDay(name)}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">
        {formatSpots()}
      </h3>
    </li>
  );
}