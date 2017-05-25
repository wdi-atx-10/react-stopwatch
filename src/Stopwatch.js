import React, { Component } from 'react';
import "./Stopwatch.css";


export default Stopwatch;

class Stopwatch extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: 0,
      paused: false
    }
  }


  startTime(){
    console.log("inside startTime, this: ", this);
    console.log("this.state.paused ", this.state.paused);
    this.setState({
      paused: false
    });
    var startInterval;
    startInterval = setInterval(() => {
      if (this.state.paused===false){
        this.setState({
          time: this.state.time+1
        });
      }
      console.log("this.state.time ", this.state.time);
    }, 1000);

  }

  resetTime(){
    console.log("inside resetTime, this: ", this);
    this.setState({
      time: 0,
      paused: true
    });
    console.log("reset", this);
  }

  pauseTime(){
    console.log("inside pauseTime, this: ", this);
    this.setState({
      paused: true
    });
    console.log("pause", this);
  }

  render() {
    return (
      <div className="stopwatch">
        <h1> <timerOutput /> </h1>
        <div className="controls">
          <button onClick={this.resetTime.bind(this)}>Reset</button>
          <button onClick={this.startTime.bind(this)}>Start</button>
          <button onClick={this.pauseTime.bind(this)}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
