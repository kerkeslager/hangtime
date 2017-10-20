import React from 'react';
import ReactDOM from 'react-dom';

const INTERVAL = 10;

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null,
      isRunning: false,
      time: null
    };
  }

  onInterval() {
    let time = this.state.time - INTERVAL;

    if(time <= 0) {
      clearInterval(this.state.interval);
      this.setState({
        interval: null,
        isRunning: false,
        time: null
      });
    } else {
      this.setState({ time: time });
    }
  }

  onStartClicked() {
    this.setState({
      isRunning: true,
      interval: setInterval(this.onInterval.bind(this), INTERVAL),
      time: 7000
    });
  }

  render() {
    if(!this.state.isRunning) {
      return <button onClick={ this.onStartClicked.bind(this) }>{ "Start" }</button>;
    }

    return <div>
      <p>{ "Hang!" }</p>
      <p>{ this.state.time }</p>
    </div>;
  }
}
