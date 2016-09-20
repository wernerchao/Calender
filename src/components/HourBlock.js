var React = require('react');

require('./css/HourBlock.css');

var HourBlock = React.createClass({
    hourClicked: function() {
        this.props.onHourClicked(this.props.time);
    },
    render: function() {
        let style = {
            backgroundColor: this.props.isSelected ? "blue" : "#ee4b28"
        };
        return (
            <div>
                <button className='HourlyTime' style={style} onClick={this.hourClicked}>
                    {this.props.time}
                </button>
            </div>
        );
    }
});

module.exports = HourBlock;