var React = require('react');
var Day = require('./Day');
var InfiniteCalendar = require('react-infinite-calendar').default;
require('react-infinite-calendar/styles.css');


var today = new Date();
var minDate = Number(new Date()) - (24 * 60 * 60 * 1000) * 1; // One day before today

var LessonController = React.createClass({
    getInitialState: function() {
        return {
            dateSelected: '2016_09_20'
        }
    },
    calendarClick: function(date) {
        this.setState({
            dateSelected: date.format("YYYY_MM_DD")
        });
    },
    onDayClick: function(time) {
        this.props.onClick(this.state.dateSelected, time);
    },
    render: function() {
        let _lessons = this.props.lessons.filter(function(lesson) { 
            return lesson.date === this.state.dateSelected;
        }.bind(this));

        return (
            <div>
                <InfiniteCalendar
                    width={375}
                    height={200}
                    selectedDate={today}
                    minDate={minDate}
                    keyboardSupport={true}
                    afterSelect={this.calendarClick } />
                <Day lessons={_lessons} onClick={this.onDayClick}/>
            </div>
        );
    }
});

module.exports = LessonController;
