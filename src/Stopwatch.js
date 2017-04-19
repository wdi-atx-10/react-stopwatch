import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {

  constructor (props) {
    super(props);
    this.state = {
      time: 0
    }
  }

  reset() {
    this.setState({
      time: 0
    })
  }

  start () {
    this.timer = setInterval(()=> {
      this.setState({
        time: this.state.time + 1
      })
    } , 1000);
  }


  pause () {
    clearTimeout(this.timer)
  }
  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.time}</h1>
        <div className="controls">
          <button onClick={()=>{this.reset()}}>Reset</button>
          <button onClick={()=>{this.start()}}>Start</button>
          <button onClick={()=>{this.pause()}}> Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;

//window.setTimeout(function, milliseconds);

// window.clearTimeout(timeoutVariable)
