import React, { Component } from 'react';
import CountDownToDate from './CountDownToDate.js';


class App extends Component {
  render() {
    return (
      <CountDownToDate givenDate={'06/ 17 / 2018'} />
    );
  }
}

export default App;
