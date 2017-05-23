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
   Stopwatch(e) {
  this.setState({ until: e.target.value });
};

handleStartClick() {
  this.setState({ enabled: false });

  this.interval = setInterval( () => {
    this.tick();

    if ( this.isTimeUp() ) {
      this.finish();
    }
  }, 1000);
};
  startTime(){

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
