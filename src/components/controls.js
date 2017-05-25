import React, { Component } from 'react';
import Start from './Start';
import Stop from './Stop';
import Reset from './Reset';
import "./Stopwatch.css"

class Controls extends Component {
  constructor(){

  }
  render(){
    return (
      <div className="Controls">
        < Start startClock={} />
        < Stop stopClock={}/>
        < Reset resetClock={}/>
      </div>

    )
  }
}

export default Controls;
