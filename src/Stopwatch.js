import React, { Component } from 'react';
import "./Stopwatch.css"


class Stopwatch extends Component {

  constructor (props) {
     super(props);
     this.state = {
       time: 0
     }
   }

   start () {
     this.timer = setInterval(()=> {
       this.setState({
         time: this.state.time + 1
       })
     } , 1000);
   }

   reset() {
     this.setState({
       time: 0
     })
   }

  render() {
    return (
      <div className="stopwatch">
        <h1>0</h1>
        <div className="controls">
          <button>Reset</button>
          <button>Start</button>
          <button>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
