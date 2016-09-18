var React = require('react');
var ReactDOM = require('react-dom');


require('./css/HourBlock.css');

var HourBlock = React.createClass({
    render: function() {
        return (
            <div>
                <button className='HourlyTime'>
                    {this.props.time}
                </button>
            </div>
        );
    }
});

module.exports = HourBlock;