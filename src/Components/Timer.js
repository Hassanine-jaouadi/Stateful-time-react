import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timerStarted: false,
      milliseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0
    };

    setInterval(() => {
      if (this.state.timerStarted)
        this.setState({
          milliseconds: this.state.milliseconds + 1000,
          hours: parseInt(this.state.milliseconds / 3600000),
          minutes: parseInt((this.state.milliseconds % 3600000) / 60000),
          seconds: parseInt(
            ((this.state.milliseconds % 3600000) % 60000) / 1000
          )
        });
    }, 1000);
  }

  handleTimerStart = () =>
    this.setState({
      timerStarted: !this.state.timerStarted
    });

  handleTimerReset() {
    this.setState({
      timerStarted: false,
      milliseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0
    });
    clearInterval(this.timer);
  }
  render() {
    /*  const { seconds, minutes, hours } = this.state; */
    return (
      <div className="mobile">
        <h1>
          Time Remaining: {this.state.hours}:{this.state.minutes}:
          {this.state.seconds}
        </h1>
        <button className="button" onClick={this.handleTimerStart.bind(this)}>
          {this.state.timerStarted ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={this.handleTimerReset.bind(this)}>
          Reset
        </button>
      </div>
    );
  }
}

export default Timer;
