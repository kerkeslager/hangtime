import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    console.log('Hey htere');
    return <p>{ "Hello, world" }</p>;
  }
}

var hello = document.getElementById('hello');

ReactDOM.render(
  <Hello />,
  hello
);

console.log('Hey');
