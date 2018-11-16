import React from "react";

const TimerLengthControl = props => {
  return (
    <div className="length-control container">
      <div className="row">Break Length</div>
      <button className="btn-level" value="-1" onClick={props.click}>
        <i className="fa fa-arrow-down fa-2x" />
      </button>
      <div>{props.breakValue}</div>
      <button className="btn-level" value="+1" onClick={props.click}>
        <i className="fa fa-arrow-up fa-2x" />
      </button>
      <div className="row">Session Length</div>
      <button className="btn-level" value="-1" onClick={props.click}>
        <i className="fa fa-arrow-down fa-2x" />
      </button>
      <div>{props.sessionValue}</div>
      <button className="btn-level" value="+1" onClick={props.click}>
        <i className="fa fa-arrow-up fa-2x" />
      </button>
    </div>
  );
};

export default TimerLengthControl;
