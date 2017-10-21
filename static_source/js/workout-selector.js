import React from 'react';
import ReactDOM from 'react-dom';

import WORKOUTS from './workouts';

export default class WorkoutSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      selectedWorkout: null
    };
  }

  onSelectChanged(e) {
    this.setState({
      error: null,
      selectedWorkout: WORKOUTS[e.target.value]
    });
  }

  onStartClicked() {
    if(this.state.selectedWorkout) {
      this.props.onSelected(this.state.selectedWorkout);
    } else {
      this.setState({
        error: 'You must select a workout to continue'
      });
    }
  }

  renderOptions() {
    return [
      <option key={ 'workout-default' }></option>
    ].concat(WORKOUTS.map((workout, workoutIndex) => {
      return <option key={ 'workout-' + workoutIndex } value={ workoutIndex }>
        { workout.name }
      </option>;
    }));
  }

  render() {
    return <div id='workout-selector'>
      <select onChange={ this.onSelectChanged.bind(this) }>
        { this.renderOptions() }
      </select>
      <p>{ this.state.error }</p>
      <button onClick={ this.onStartClicked.bind(this) }>{ "Start" }</button>
    </div>;
  }
}

WorkoutSelector.defaultProps = {
  onSelected: () => { }
};
