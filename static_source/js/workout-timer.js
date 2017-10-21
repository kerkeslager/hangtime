import React from 'react';
import ReactDOM from 'react-dom';

const INTERVAL = 100;

export default class WorkoutTimer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interval: setInterval(this.onInterval.bind(this), INTERVAL),
      setIndex: 0,
      instructionIndex: 0,
      time: props.workout.sets[0].instructions[0].time
    };
  }

  onSetFinished() {
    let setIndex = this.state.setIndex + 1;

    if(setIndex === this.props.workout.sets.length) {
      this.props.onFinished();
    } else {
      this.setState({
        setIndex: setIndex,
        instructionIndex: 0,
        time: this.props.workout.sets[setIndex].instructions[0].time
      });
    }
  }

  onRepFinished() {
    let instructionIndex = this.state.instructionIndex + 1;

    if(instructionIndex === this.props.workout.sets[this.state.setIndex].instructions.length) {
      this.onSetFinished();
    } else {
      this.setState({
        instructionIndex: instructionIndex,
        time: this.props.workout.sets[this.state.setIndex].instructions[instructionIndex].time
      });
    }
  }

  onInterval() {
    let time = this.state.time - INTERVAL;

    if(time === 0) {
      if(this.state.instructionIndex < this.props.workout.sets[this.state.setIndex].instructions.length) {
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
    return <div id='workout-timer'>
      <p>{ this.props.workout.sets[this.state.setIndex].instructions[this.state.instructionIndex].type }</p>
      <p>{ this.state.time / 1000 }</p>
    </div>;
  }
}
