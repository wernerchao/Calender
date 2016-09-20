import React, { Component } from 'react';
import logo from './logo.svg';
import LessonController from './components/LessonController';
import Lesson from './models/lesson';
import './App.css';

var lessons = [
  new Lesson({date: "2016_09_19", time: "9AM"}),
  new Lesson({date: "2016_09_19", time: "12PM"}),
  new Lesson({date: "2016_09_20", time: "5PM"})
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: lessons
    };
  };

  onClick(date, time) {
      let tempLesson = new Lesson ({date: date, time: time});
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
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <LessonController lessons={this.state.lessons} onClick={this.onClick.bind(this)}/>
      </div>
    );
  }
}

export default App;