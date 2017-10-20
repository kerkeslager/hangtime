import React from 'react';
import ReactDOM from 'react-dom';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false
    };
  }

  onStartClicked() {
    console.log('hi');
    this.setState({ running: true });
  }

  render() {
    if(!this.state.isRunning) {
      return <button onClick={ this.onStartClicked.bind(this) }>{ "Start" }</button>;
    }

    return <p>{ "Hello, world" }</p>;
  }
}
