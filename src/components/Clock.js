import React from 'react';

let time = new Date().toLocaleString();
export default class Clock extends Component {
  render() {
    return (
      <p className="App-clock">
        The time is {time}.
      </p>
    );
  }
}
