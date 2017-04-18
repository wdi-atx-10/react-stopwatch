import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(){
    super();
    this.state = {
      seconds: 0
    }
  }
  _startTime(){
    let seconds = this.state.seconds;
    let start = setInterval(seconds,1000);
    this.setState({seconds: start});
  }
   _stopTime(){
     let seconds = this.state.seconds;
     let stop = clearInterval(seconds);
     this.setState({seconds: stop});
  }
  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.seconds}</h1>
        <div className="controls">
          <button onClick={this.setState({seconds:0})}>Reset</button>
          <button onClick={()=>this._startTime.bind(this)}>Start</button>
          <button onClick={()=>this._stopTime.bind(this)}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
