import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props) {
      super(props);

          this.state = {
              startTime: 0,
              }
    }

    handleClick(){
        if (this.state.running) {
            clearInterval(this.interval);
            this.setState({running: false});
            return
        }

        this.setState({startTime: new Date()});

        this.interval = setInterval(() => {
            this.setState({
                timeElapsed: new Date() - this.state.startTime,
                running: true
            });
        }, 30);
    }


  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.startTime}</h1>
        <div className="controls">
          <button>Reset</button>
          <button onClick={this.handleClick.bind(this)}>Start</button>
          <button>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
