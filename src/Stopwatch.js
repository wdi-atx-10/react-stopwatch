import React, { Component } from 'react';
import "./Stopwatch.css"




class Stopwatch extends Component {

constructor(props) {
  super(props)
  this.state= {
    elapsedTime: 0,
    running: false,
  }
}

start(e) {
  let intervalId = window.setInterval(_=> {
    this.setState({
      elapsedTime: this.state.elapsedTime + 1
    })
  }, 10)
  this.setState({
    intervalId: intervalId,
    running: true
  })
  }

pause(e) {
  window.clearInterval(this.state.intervalId)
  this.setState({
    running: false,
  })
}

reset(e) {
  window.clearInterval(this.state.intervalId)
  this.setState({
    elapsedTime: 0,
    running: false,
  })
}

render() {
  return (
    <div className="stopwatch">
    <div className="time-display">
    { parseInt(this.state.elapsedTime/6000) }:{ parseInt(this.state.elapsedTime / 100).toString().slice(-2) }:{this.state.elapsedTime.toString().slice(-2)}
    </div>
    <div className="controls">
    { this.state.running ? <a className="button" href="#" onClick={e => this.pause(e)}>Pause</a> : <a className="button" href="#" onClick={e => this.start(e)}>Start</a>}
    </div>
    </div>
  );
}
}

export default Stopwatch;
