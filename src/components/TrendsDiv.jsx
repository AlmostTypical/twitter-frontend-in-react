const React = require('react');
const ReactDOM = require('react-dom');
const Trends = require('./Trends');

const TrendsDiv = React.createClass({
  render: function() {
    return (
      <div className="panel">
        <div className="panel-heading text-center">
          <h3 className="title">Trends</h3>
        </div>
        <Trends />
      </div>
    );
  }
});

module.exports = TrendsDiv;