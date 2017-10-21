import React from 'react';
import ReactDOM from 'react-dom';

const WORKOUTS = [
  {
    name: 'repeaters',
    sets: [
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
    ]
  }
];

export default class WorkoutSelector extends React.Component {
  onStartClicked() {
    this.props.onSelected(WORKOUTS[0]);
  }

  render() {
    return <button onClick={ this.onStartClicked.bind(this) }>{ "Start" }</button>;
  }
}

WorkoutSelector.defaultProps = {
  onSelected: () => { }
};
