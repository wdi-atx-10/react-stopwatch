import React from 'react';
import ReactDOM from 'react-dom';
import Stopwatch from './Stopwatch';
import TimeDisplay from './components/TimeDisplay';
import StartPause from './components/StartPause';
import Reset from './components/Reset';
import './index.css';

ReactDOM.render(
  <App />,
  <Stopwatch />,
  <TimeDisplay />,
  <StartPause />,
  <Reset />,
  document.getElementById('root')
);
