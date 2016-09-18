var React = require('react');
var ReactDOM = require('react-dom');
var HourBlock = require('./HourBlock');

require('./css/Day.css');

var am_session = [];

for (var i=1; i < 12; i++) {
    am_session.push(<HourBlock time={i+'AM'}/>);
}
am_session.push(<HourBlock time={12+'PM'}/>);

var pm_session = [];
for (var i=1; i < 12; i++) {
    pm_session.push(<HourBlock time={i+'PM'}/>);
}
pm_session.push(<HourBlock time={12+'AM'}/>);

var Day = React.createClass({

    render: function() {
        return (
            <div>
                <div className='Calender-table'>
                    
                </div>
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