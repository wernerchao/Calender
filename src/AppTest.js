import React, { Component } from 'react';
import logo from './logo.svg';

import Day from './components/Day.js';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import './App.css';

var today = new Date();
var minDate = Number(new Date()) - (24 * 60 * 60 * 1000) * 1; // One day before today

class Lesson {
  constructor(params = {}) {
    this.date = params.date;
    this.time = params.time;
  }
}

var lessons = [
  new Lesson({date: "2016_09_19", time: "9AM"}),
  new Lesson({date: "2016_09_19", time: "12PM"}),
  new Lesson({date: "2016_09_20", time: "5PM"})
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateSelected: '2016_09_19',
      lessons: lessons
    };
  };

  calendarClick(date) {
    this.state.dateSelected = date.format("YYYY_MM_DD");
    this.setState(this.state);
  }

  dayClick(time) {
    let tempLesson = new Lesson ({date: this.state.dateSelected, time: time});
    let exists = false;
    for (var i=0; i<lessons.length; i++) {
      if (lessons[i].date === tempLesson.date && lessons[i].time === tempLesson.time) {
        lessons.splice(i, 1);
        exists = true;
        break;
      }
    }
    if (!exists) {
        this.state.lessons.push(tempLesson);
    }
    this.setState(this.state)
  }

  render() {
    let _lessons = this.state.lessons.filter(function(lesson) { 
      return lesson.date === this.state.dateSelected;
    }.bind(this));

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <InfiniteCalendar
          width={375}
          height={200}
          selectedDate={today}
          minDate={minDate}
          keyboardSupport={true}
          afterSelect={this.calendarClick.bind(this) }
          />
        <Day lessons={_lessons} onClick={this.dayClick.bind(this) }/>
      </div>
    );
  }
}

export default App;