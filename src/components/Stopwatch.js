import React, { Component } from 'react';
import Controls from './controls'
import "../Stopwatch.css"

class Stopwatch extends Component {
  render(){
    return (
      < div className="Stopwatch">
        <h1>0</h1>
      </div>
    )
  }
}

export default Stopwatch;
