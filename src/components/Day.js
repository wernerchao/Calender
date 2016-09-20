var React = require('react');
var HourBlock = require('./HourBlock');

require('./css/Day.css');


var Day = React.createClass({
    onHourClicked: function(time) {
        let onClick = this.props.onClick;
        if (onClick) {
            onClick(time);
        }
    },

    render: function() {
        let lessons = this.props.lessons || [];
        lessons = lessons.map(function(lesson) {
            return lesson.time;
        });
        var am_session = [];
        for (var i = 1; i < 12; i++) {
            let time = i + 'AM';
            let isSelected = lessons.indexOf(time) !== -1;
            am_session.push(<HourBlock key={i} time={time} isSelected={isSelected} onHourClicked={this.onHourClicked}/>);
        }
        let isSelectedPM = lessons.indexOf('12PM') !== -1;
        am_session.push(<HourBlock key={12} time={12+'PM'} isSelected={isSelectedPM} onHourClicked={this.onHourClicked}/>);

        var pm_session = [];
        for (i = 1; i < 12; i++) {
            let time = i + 'PM';
            let isSelected = lessons.indexOf(time) !== -1;
            pm_session.push(<HourBlock key={i} time={i+'PM'} isSelected={isSelected} onHourClicked={this.onHourClicked}/>);
        }
        let isSelectedAM = lessons.indexOf('12AM') !== -1;
        pm_session.push(<HourBlock key={12} time={12+'AM'} isSelected={isSelectedAM} onHourClicked={this.onHourClicked}/>);

        return (
            <div>
                <div className='Calender-table'>
                    {am_session}
                </div>
                <div className='Calender-table'>
                    {pm_session}
                </div>
            </div>
        );
    }
});

module.exports = Day;