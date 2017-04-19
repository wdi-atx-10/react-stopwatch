import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props){
    super(props);
    this.state= {
      seconds: 0,
      secondsElapsed: 0
    }
    }
    this._handleStartClick = this._handleStartClick.bind(this);
    this._handleResetClick = this._handleResetClick.bind(this);
  }

  _handleStartClick(){
    let seconds = this.state.secondsElapsed;
      this.setState({secondsElapsed: seconds + 1});
    }
  }


  _handlePauseClick(){
    var running = setInterval(this._handleStartClick, 1000);
      clearInterval(running);
      console.log('clicked')
  }

  _handleResetClick(){
    this.setState({secondsElapsed:0});
  }

  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.secondsElapsed}</h1>
        <div className="controls">
          <button onClick={this.handleResetClick}>Reset</button>
          <button onClick={this.handleStartClick}>Start</button>
          <button onClick={this.handlePauseClick}>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
