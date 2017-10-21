import React from 'react';
import ReactDOM from 'react-dom';

import WorkoutSelector from './workout-selector';
import WorkoutTimer from './workout-timer';
import FinishedWorkout from './finished-workout';


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
