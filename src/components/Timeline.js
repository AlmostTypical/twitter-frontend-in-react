const React = require('react');
const axios = require('axios');

const TweetCard = require('./TweetCard');

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
        self.extractTweetData(response.data)
      });
  },
  extractTweetData: function (users) {

    // console.log('users', users);

    let tweets = users.reduce(function (mem,cur) {
      return mem.concat(cur.tweets)
    },[]).sort(function (a,b) {
      return Date.parse(b.created_at) - Date.parse(a.created_at);
    });

    this.setState({
      tweets: tweets,
      loading: false
    });

    // console.log('tweets',tweets)

  },
  render: function () {

    if(this.state.loading){
      return(
        <div className="profileCard panel has-text-centered">
              <i className="fa fa-cog fa-spin fa-3x fa-fw"></i>
              <span className="sr-only">Loading...</span>
              <i className="fa fa-cog fa-spin-reverse fa-3x fa-fw "></i>
              <span className="sr-only">Loading...</span>
              <i className="fa fa-cog fa-spin fa-3x fa-fw"></i>
              <span className="sr-only">Loading...</span>
        </div>
      )
    } else {
      return(
        <div className="profileCard item-background">
          <ul>
            {
              this.state.tweets.map(function (tweet ,index) {
                return (
                  <li key={index}>
                    <TweetCard tweet={tweet}/>
                  </li>
                )
              })
            }
          </ul>
        </div>
      )
    }
  }
});

module.exports = TimeLine;