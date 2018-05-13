import React from 'react';
import ReactDOM from 'react-dom';

const INTERVAL = 100;

function setBodyBackground(color) {
  document.body.style.background = color;
}

var REST_COLOR = 'red';
var HANG_COLOR = 'green';
var IDLE_COLOR = 'grey';

function instructionTypeToColor(instructionType) {
  switch(instructionType) {
    case 'prep':
    case 'rest':
      return REST_COLOR;

    case 'hang':
      return HANG_COLOR;

    default:
      console.log('Should not have gotten here');
  }
}

export default class WorkoutTimer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interval: setInterval(this.onInterval.bind(this), INTERVAL),
      setIndex: 0,
      instructionIndex: 0,
      time: props.workout.sets[0].instructions[0].time
    };

    setBodyBackground(instructionTypeToColor(props.workout.sets[0].instructions[0].type));
  }

  onSetFinished() {
    let setIndex = this.state.setIndex + 1;

    if(setIndex === this.props.workout.sets.length) {
      this.props.onFinished();
      setBodyBackground(IDLE_COLOR);
    } else {
      this.setState({
        setIndex: setIndex,
        instructionIndex: 0,
        time: this.props.workout.sets[setIndex].instructions[0].time
      });

      setBodyBackground(instructionTypeToColor(
        this.props.workout.sets[setIndex].instructions[0].type
      ));
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

      setBodyBackground(instructionTypeToColor(
        this.props.workout.sets[this.state.setIndex].instructions[instructionIndex].type
      ));
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

  renderRemainingSetsCount() {
    let remainingSetsCount = this.props.workout.sets.length - this.state.setIndex;
    return <div className='remaining'>{ remainingSetsCount + ' sets remaining' }</div>;
  }

  renderRemainingHangsCount() {
    let remainingHangsCount = this.props.workout.sets[this.state.setIndex].instructions.slice(
      this.instructionIndex,
      this.props.workout.sets[this.state.setIndex].length
    ).filter(i => i.type === 'hang').length;

    return <div className='remaining'>{ remainingHangsCount + ' hangs remaining' }</div>;
  }

  renderInstructionArea() {
    let instructionType = this.props.workout.sets[this.state.setIndex].instructions[this.state.instructionIndex].type;

    switch(instructionType) {
      case 'prep':
        if(this.state.time <= 5000) {
          return <div>
            { this.renderRemainingSetsCount() }
            <div className='instruction'>{ 'Get ready!' }</div>
          </div>;
        } else {
          return <div>
            { this.renderRemainingSetsCount() }
            <div className='instruction'>{ 'Rest' }</div>
          </div>;
        }

      case 'rest':
        return <div>
          { this.renderRemainingHangsCount() }
          <div className='instruction'>{ 'Rest' }</div>
        </div>;

      case 'hang':
        return <div>
          { this.renderRemainingHangsCount() }
          <div className='instruction'>{ 'Hang!' }</div>
        </div>;

      default:
        console.log('Unhandled instruction type');
    }
  }

  render() {
    return <div id='workout-timer'>
      <div className='hold'>{ "Hold: "}{ this.props.workout.sets[this.state.setIndex].hold }</div>
      <div className='hold'>{ "Fingers: "}{ this.props.workout.sets[this.state.setIndex].fingers }</div>
      { this.renderInstructionArea() }
      <div className='time'>{ this.state.time / 1000 }</div>
    </div>;
  }
}
