const React = require('react');
const ReactDOM = require('react-dom');

const Trend = React.createClass({
  getInitialState: function () {
    return {
      loaded: false
    }
  },
  render: function () {
    if (!this.state.loaded) {
      return (
        <p>Loading...</p>
      );
    }
  }
});

module.exports = Trend;