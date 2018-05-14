import React from 'react';
import ReactDOM from 'react-dom';

function leftPad(number, width) {
  let string = Math.floor(number).toFixed(0);

  while(string.length < width) {
    string = '0' + string;
  }

  return string;
}

export default class TimeDisplay extends React.Component {
  render() {
    let totalSeconds = Math.floor(this.props.milliseconds / 1000);
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);

    return <div className='time-display'>{ leftPad(minutes, 2) }:{ leftPad(seconds, 2) }</div>;
  };
};
