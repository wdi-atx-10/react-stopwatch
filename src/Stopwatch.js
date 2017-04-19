import React, { Component } from 'react';
import "./Stopwatch.css";

class Stopwatch extends Component {
  constructor(){
    super();
    this.state = {
      secondsCounted: 0
    }
    this._Timer = this._Timer.bind(this);
    this._Reset = this._Reset.bind(this);
  }

  _Stop(){
    var running = setInterval(this._Timer, 1000);
    clearInterval(running);
    console.log('clicked')
  }

  _Timer(){
    let seconds = this.state.secondsCounted;
    this.setState({secondsCounted: seconds + 1});
  }

  _Reset(){
    this.setState({secondsCounted:0});
  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.secondsCounted}</h1>
        <div className="controls">
          <button onClick={this._Reset}>Reset</button>
          <button onClick={()=>setInterval(this._Timer, 1000)}>Start</button>
          <button onClick={this._Stop}>Pause</button>
        </div>
      </div>
    );
  }
}


export default Stopwatch;
