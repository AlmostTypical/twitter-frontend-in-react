const React = require('react');
const ReactDOM = require('react-dom');
const axios = require(('axios'));

const Trend = React.createClass({
  getInitialState: function () {
    console.log('initial')
    return {
      loaded: false
    }
  },
  //called one in life cycle
  componentDidMount: function () {
    this.fetchTrends()
  },
  //rember to look up error handling
  fetchTrends: function () {
    let self = this;
    axios.get('https://protected-oasis-31937.herokuapp.com/trends')
      .then(function (response) {
        self.sortTrends(response.data.tweetData.trends[0].trends);
      });
  },
  sortTrends: function (trends) {
    var data = trends.map(function (trend){
      return {volume: trend.tweet_volume, name: trend.name}
    }).filter(function (trend) {
      return trend.volume
    }).sort(function (a, b) {
      if (a.volume < b.volume)
        return 1;
      if (a.volume > b.volume)
        return -1;
      return 0;
    });
    this.setState({
      loaded: true,
      trends: data
    });
  },
  render: function () {
    if (!this.state.loaded) {
      return (
        <p>Loading...</p>
      );
    }
    return (
      <div>
        {
          this.state.trends.map(function (tweet, index) {
            return (
              <div key={index} className="panel-block">
                <p><strong>{tweet.name}</strong></p>
                <p className="trend-count">{tweet.volume.toLocaleString()} Tweets</p>
              </div>
            )
          })
        }
      </div>
    )
  }
});

module.exports = Trend;