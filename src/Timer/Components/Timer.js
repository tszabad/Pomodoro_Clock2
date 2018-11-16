import React, { Component } from "react";
import TimerLengthControl from "../..//TimerLengthControl/Components/TimerLengthControl";
import moment from "moment";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      break: false,
      runningTime: 1500,
      startSession: 1500,
      startBreak: 300,

      brkLength: 5,
      seshLength: 25
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleBreak = this.handleBreak.bind(this);
    this.setBrkLength = this.setBrkLength.bind(this);
    this.timer;
  }

  setBrkLength(e) {
    let num = Number(e.currentTarget.value);
    console.log(num);
    this.setState((prevState, props) => {
      return { startBreak: prevState.startBreak + num };
    });
  }

  handleBreak() {
    this.setState({
      runningTime: this.state.startBreak
    });
  }

  handleClick() {
    this.setState(state => {
      if (state.status) {
        clearInterval(this.timer);
      } else if (!state.status) {
        this.timer = setInterval(() => {
          if (this.state.runningTime >= 1) {
            this.setState({ runningTime: this.state.runningTime - 1 });
          } else {
            this.setState({ runningTime: 1500, status: false });
            clearInterval(this.timer);
          }
        }, 1000);
      }

      return { status: !state.status };
    });
  }

  handleReset() {
    this.setState({ runningTime: 1500, status: false });
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="container-fluid">
        <TimerLengthControl
          breakValue={this.state.startBreak}
          sessionValue={this.state.startSession}
          click={this.setBrkLength}
        />

        <div>
          <span className="border border-dark">
            <h1 className=" display-1 text-center" id="time-left">
              {this.state.runningTime}
            </h1>
          </span>
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col">
                <button
                  className="btn btn-dark"
                  id="start_stop"
                  type="button"
                  onClick={this.handleClick}
                >
                  {this.state.status ? "Stop" : "Start"}
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-dark"
                  type="button"
                  onClick={this.handleBreak}
                >
                  Break
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-dark"
                  id="reset"
                  type="button"
                  onClick={this.handleReset}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Timer;
