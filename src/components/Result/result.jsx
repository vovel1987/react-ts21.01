import React from "react";
import res from "./res.module.css";
const Result = (props) => {
  return (
    <div>
      <p className={res.p}>
        Общее количество задач: 'N' ={" "}
        <span className={res.span}> {props.summe} </span>
      </p>
    </div>
  );
};
export default Result;
