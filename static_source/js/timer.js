import React from 'react';
import ReactDOM from 'react-dom';

const WORKOUT = [
  {
    instructions: [
      { type: 'prep', time: 5000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 }
    ],
  },
  {
    instructions: [
      { type: 'prep', time: 120000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 }
    ],
  },
  {
    instructions: [
      { type: 'prep', time: 120000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 }
    ],
  },
  {
    instructions: [
      { type: 'prep', time: 120000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 }
    ],
  },
  {
    instructions: [
      { type: 'prep', time: 120000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 }
    ],
  },
  {
    instructions: [
      { type: 'prep', time: 120000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 }
    ],
  },
  {
    instructions: [
      { type: 'prep', time: 300000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 }
    ],
  },
  {
    instructions: [
      { type: 'prep', time: 120000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 }
    ],
  },
  {
    instructions: [
      { type: 'prep', time: 120000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 }
    ],
  },
  {
    instructions: [
      { type: 'prep', time: 120000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 }
    ],
  },
  {
    instructions: [
      { type: 'prep', time: 120000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 }
    ],
  },
  {
    instructions: [
      { type: 'prep', time: 120000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 },
      { type: 'rest', time: 3000 },
      { type: 'hang', time: 7000 }
    ]
  }
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

const INTERVAL = 100;

class WorkoutTimer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interval: setInterval(this.onInterval.bind(this), INTERVAL),
      setIndex: 0,
      instructionIndex: 0,
      time: props.workout[0].instructions[0].time
    };
  }

  onSetFinished() {
    let setIndex = this.state.setIndex + 1;

    if(setIndex === this.props.workout.length) {
      this.props.onFinished();
    } else {
      this.setState({
        setIndex: setIndex,
        instructionIndex: 0,
        time: this.props.workout[setIndex].instructions[0].time
      });
    }
  }

  onRepFinished() {
    let instructionIndex = this.state.instructionIndex + 1;

    if(instructionIndex === this.props.workout[this.state.setIndex].instructions.length) {
      this.onSetFinished();
    } else {
      this.setState({
        instructionIndex: instructionIndex,
        time: this.props.workout[this.state.setIndex].instructions[instructionIndex].time
      });
    }
  }

  onInterval() {
    let time = this.state.time - INTERVAL;

    if(time === 0) {
      if(this.state.instructionIndex < this.props.workout[this.state.setIndex].instructions.length) {
        this.onRepFinished();
      } else {
        clearInterval(this.state.interval);
        this.props.onFinished();
      }
    } else {
      this.setState({ time: time });
    }
  }

  render() {
    return <div>
      <p>{ this.props.workout[this.state.setIndex].instructions[this.state.instructionIndex].type }</p>
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
