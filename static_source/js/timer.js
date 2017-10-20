import React from 'react';
import ReactDOM from 'react-dom';

const WORKOUT = [
  { message: 'hang', time: 7000 },
];

class WorkoutSelector extends React.Component {
  onStartClicked() {
    this.props.onSelected(WORKOUT);
  }

  render() {
    return <button onClick={ this.onStartClicked.bind(this) }>{ "Start" }</button>;
  }
}

WorkoutSelector.defaultProps = {
  onSelected: () => { }
};

const INTERVAL = 10;

class WorkoutTimer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 7000,
      interval: setInterval(this.onInterval.bind(this), INTERVAL)
    };

  }

  onInterval() {
    let time = this.state.time - INTERVAL;

    if(time <= 0) {
      clearInterval(this.state.interval);
      this.props.onFinished();
    } else {
      this.setState({ time: time });
    }
  }

  render() {
    return <div>
      <p>{ "Hang!" }</p>
      <p>{ this.state.time / 1000 }</p>
    </div>;
  }
}

class FinishedWorkout extends React.Component {
  render() {
    return <p>{ "Finished!" }</p>;
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      state: 'selecting-workout'
    };
  }

  onWorkoutSelected(workout) {
    this.setState({
      state: 'working-out',
      workout: workout
    });
  }

  onWorkoutFinished() {
    this.setState({
      state: 'finished-workout'
    });
  }

  render() {
    switch(this.state.state) {
      case 'selecting-workout':
        return <WorkoutSelector onSelected={ this.onWorkoutSelected.bind(this) } />

      case 'working-out':
        return <WorkoutTimer workout={this.state.workout} onFinished={ this.onWorkoutFinished.bind(this) } />;

      case 'finished-workout':
        return <FinishedWorkout />;
    }
  }
}
