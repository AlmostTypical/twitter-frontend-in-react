const React = require('react');
const TimeLine = require('./Timeline');

const TimeLineDiv = React.createClass({

  render: function () {
    return(
      <div className="profileCard panel">
        <div className="panel-heading has-text-centered">
          <h2>Timeline</h2>
        </div>
        <div>
          <TimeLine/>
        </div>
      </div>
    )
  }
});

module.exports = TimeLineDiv;