import React, { Component } from 'react';
import '../App.css';

class Start extends Component {
  constructor(){
    super();
  }

startClock() {
//timeinterval
  this.props.start;

}
  render() {
    return (
      <button onClick={this.startClock.bind(this)}>
      </button>
    );
  }
}



export default Start;
