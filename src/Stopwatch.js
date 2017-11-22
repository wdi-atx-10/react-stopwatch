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
    this.timer = setInterval(() => {
       this.setState({
         time: this.state.time + 1
       })
     } , 1000);
   }

  pause () {
     clearTimeout(this.timer)
   }

   reset() {
     this.setState({
       time: 0
     })
   }
    render() {
      return (
        <div className="stopwatch">
         <h1>{this.state.time}</h1>
          <div className="something">
            <h2><span>Ready, Steady, Go!</span></h2>
          </div>
          <div className="controls">
           <button onClick={()=>{this.start()}}>Start</button>
           <button onClick={()=>{this.pause()}}>Pause</button>
           <button onClick={()=>{this.reset()}}>Reset</button>
          </div>
        </div>
      );
  }
}

export default Stopwatch;
