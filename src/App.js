import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Day from './components/Day.js';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

var today = new Date();
var minDate = Number(new Date()) - (24*60*60*1000) * 1; // One week before today

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <InfiniteCalendar
          width={375}
          height={150}
          selectedDate={today}
          disabledDays={[0,6]}
          minDate={minDate}
          keyboardSupport={true}
          afterSelect={alert.('test')}
        />
        <Day />
      </div>
    );
  }
}

export default App;
