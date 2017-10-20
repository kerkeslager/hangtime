import React from 'react';
import ReactDOM from 'react-dom';

const WORKOUT = {
  sets: [
    {
      reps: [
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 }
      ],
      rest: 120000
    },
    {
      reps: [
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 }
      ],
      rest: 120000
    },
    {
      reps: [
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 }
      ],
      rest: 120000
    },
    {
      reps: [
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 }
      ],
      rest: 120000
    },
    {
      reps: [
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 }
      ],
      rest: 120000
    },
    {
      reps: [
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 }
      ],
      rest: 30000
    },
    {
      reps: [
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 }
      ],
      rest: 120000
    },
    {
      reps: [
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 }
      ],
      rest: 120000
    },
    {
      reps: [
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 }
      ],
      rest: 120000
    },
    {
      reps: [
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 }
      ],
      rest: 120000
    },
    {
      reps: [
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 }
      ],
      rest: 120000
    },
    {
      reps: [
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 },
        { hang: 7000, rest: 3000 }
      ],
      rest: 0
    }
  ]
};

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
      rep: 0,
      set: 0,
      time: 0
    };

    setInterval(this.onInterval.bind(this), INTERVAL);
  }

  onInterval() {
    let time = this.state.time;

    this.setState({
      time: time + INTERVAL
    });
  }

  render() {
    return <div>
      <p>{ "Set: " + this.state.set + " Rep: " + this.state.rep }</p>
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
