import React from "react";
import cont from './cont.module.css'

const Content = (props) => {
  return (
    <div>
      <p className={cont.title}>
        {props.part1} {props.tasks1}
      </p>
      <p className={cont.part2}>
        {props.part2} {props.tasks2}
      </p>
      <p className={cont.part3}>
        {props.part3} {props.tasks3}
      </p>

      {/* <p>{props.part2} {props.task2}</p>
      <p>{props.part3} {props.task3}</p> */}
    </div>
  );
};
export default Content;
