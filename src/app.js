const React = require('react');
const ReactDOM = require('react-dom');
const axios = require(('axios'));

const TrendsDiv = require('./components/TrendsDiv');
const NavBar = require('./components/NavBar');
const ProfileCard =  require('./components/ProfileCard');
const TimeLine = require('./components/Timeline');
const WhoToFollow = require('./components/WhoToFollow');
const SideFoot = require('./components/SideFoot');

const App = React.createClass({
  getInitialState: function () {
    return ({
      currentUser: 'northcoders'
    })
  },
  componentDidMount: function () {
    this.fetchTweets();
  },
  fetchTweets: function () {
    let self = this;
    axios.get('https://protected-oasis-31937.herokuapp.com/tweets')
      .then(function (response) {
         let sorted = self.collectData(response);
        self.setState({allUserInfo: sorted}, function () {
          this.pullCurrentUserTweets(this.state.allUserInfo);
        });
      });

  },
  collectData: function (data) {
    let sorted = data.data.map(function(userData) {
      return userData;
    });
    return sorted;
  },
  pullCurrentUserTweets: function (allUserInfo) {
    let self = this;
    let currentUserInfo = allUserInfo.filter(function (user) {
      if (user.handle === self.state.currentUser) {
        return user;
      }
    })[0].tweets;
    console.log(currentUserInfo);
    this.setState({currentUserTweets: currentUserInfo});
  },
  render: function () {
    let info;
    if (this.state.currentUserTweets !== undefined) {
      info = this.state.currentUserTweets[0];
    } else {
      info = undefined;
    }
    return (
      <div className="container">
        <NavBar/>
        <div className="columns">
          <div className="column is-one-quarter">
            <ProfileCard info={info}/>
            <TrendsDiv />
          </div>
          <div className="column is-half">
            <TimeLine/>
          </div>
          <div className="column is-one-quarter">
            <WhoToFollow/>
            <SideFoot/>

          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
