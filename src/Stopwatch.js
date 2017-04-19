import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor(props){
    super(props)
    this.state = {
      seconds: 0,
      pause: true,
    }
    this.time = null;
  }

  startWatch(e){
    if(!this.time){
      this.time = setInterval( time => this.setInterval(), 1000);
    }
  }

  setInterval(){
    this.setState({
      seconds: this.state.seconds + 1,
      pause: false,
    })
  }

  resetWatch(e){
    this.resetInterval()
    this.setState({
      seconds: 0,
      pause: true
    });
  }

  pauseWatch(e){
    let pause = this.state.pause;
    if(!pause){
      this.resetInterval();
      this.setState({
        pause: true,
      });
    } else {
      this.startWatch();
    }
  }

  resetInterval(){
    clearInterval(this.time);
    this.time = null;
  }




  render() {
    return (
      <div className="stopwatch">
        <h1>{ this.state.seconds }</h1>
        <div className="controls">
          <button onClick={ (e)=>this.resetWatch(e) } >Reset</button>
          <button onClick={ (e)=>this.startWatch(e) } >Start</button>
          <button onClick={ (e)=>this.pauseWatch(e) } >Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
