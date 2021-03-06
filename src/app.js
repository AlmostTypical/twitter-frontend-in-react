const React = require('react');
const ReactDOM = require('react-dom');
const axios = require(('axios'));

const TrendsDiv = require('./components/TrendsDiv');
const NavBar = require('./components/NavBar');
const ProfileCard =  require('./components/ProfileCard');
const TimeLineDiv = require('./components/TimelineDiv');
const WhoToFollow = require('./components/WhoToFollow');
const SideFoot = require('./components/SideFoot');

const App = React.createClass({
  getInitialState: function () {
    return ({
      loading: true,
      currentUser: 'chrishealdphoto'
    })
  },

  render: function () {
    let info;
    if (this.state.currentUserTweets !== undefined) {
      info = this.state.currentUserTweets[0];
    } else {
      info = undefined;
    }
    return (
      <div className="container background">
        <NavBar/>
        <div className="columns">
          <div className="column is-one-quarter">
            <ProfileCard user={this.state.currentUser}/>
            <TrendsDiv />
          </div>
          <div className="column is-half">
            <TimeLineDiv/>
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
