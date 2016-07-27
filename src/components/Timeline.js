const React = require('react');
const axios = require('axios');

const TimeLine = React.createClass({

  getInitialState: function () {
    return({
      loading: true
    })
  },
  componentDidMount: function () {
    this.getAllTweetData()
  },
  getAllTweetData: function () {
    let self = this;
    axios('https://protected-oasis-31937.herokuapp.com/tweets')
      .then(function (response) {
        //console.log('all tweets',response)
        let tweets = self.extractTweetData(response.data)
      });
  },
  extractTweetData: function (users) {

    console.log('users', users)

    let tweets = users.reduce(function (mem,cur) {
      return mem.concat(cur.tweets)
    },[]);

    console.log('tweets',tweets)

  },
  render: function () {
    return(
      <div className="profileCard panel">
        <ul>
          <li>hello</li>
        </ul>
      </div>
    )
  }
});

module.exports = TimeLine;