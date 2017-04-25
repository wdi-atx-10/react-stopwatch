import React, { Component } from 'react';

class TimeDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timeElapsed: 0
    }
  }


render(){
  return(
    <div className="time-display">
    00:00:00
    </div>
  );
}
}


export default TimeDisplay;
