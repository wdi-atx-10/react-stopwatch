import React, { Component } from 'react';
import "./Stopwatch.css";

class Stopwatch extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: 0,
      paused: false,
      intervalId: 0
    }
  }

  startTime(){
    console.log("inside startTime, this: ", this);
    console.log("this.state.paused ", this.state.paused);
    this.setState({
      paused: false
    });
    clearInterval(this.state.intervalId);
    var intervalId = setInterval(() => {
      if (this.state.paused===false){
        this.setState({
          time: this.state.time+1
        });
      }
      console.log("this.state.time ", this.state.time);
    }, 1000);
    this.setState({intervalId: intervalId});
  }

  resetTime(){
    console.log("inside resetTime, this: ", this);
    clearInterval(this.state.intervalId);
    this.setState({
      time: 0,
      paused: true,
      intervalId: 0
    });
    console.log("reset", this);
  }

  pauseTime(){
    console.log("inside pauseTime, this: ", this);
    clearInterval(this.state.intervalId);
    this.setState({
      paused: true,
      intervalId: 0
    });
    console.log("reset", this);
  }

  render() {
    return (
      <div className="stopwatch">
        <h1> {this.state.time} </h1>
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
