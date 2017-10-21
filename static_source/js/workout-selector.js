import React from 'react';
import ReactDOM from 'react-dom';

import WORKOUTS from './workouts';

export default class WorkoutSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedWorkout: null
    };
  }

  onSelectChanged(e) {
    this.setState({
      selectedWorkout: WORKOUTS[e.target.value]
    });
  }

  onStartClicked() {
    this.props.onSelected(this.state.selectedWorkout);
  }

  renderOptions() {
    return WORKOUTS.map((workout, workoutIndex) => {
      return <option key={ 'workout-' + workoutIndex } value={ workoutIndex }>
        { workout.name }
      </option>;
    });
  }

  render() {
    return <div id='workout-selector'>
      <select onChange={ this.onSelectChanged.bind(this) }>
        { this.renderOptions() }
      </select>
      <button onClick={ this.onStartClicked.bind(this) }>{ "Start" }</button>
    </div>;
  }
}

WorkoutSelector.defaultProps = {
  onSelected: () => { }
};