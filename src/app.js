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
  setInitialState: function () {
    return ({
      currentUser: 'northcoders'
    })
  },
  componentDidMount: function () {
    this.fetchTweets();
  },
  fetchTweets: function () {
    let self = this
    axios.get('https://protected-oasis-31937.herokuapp.com/tweets')
      .then(function (responce) {
        console.log(responce);
         let sorted = self.sortData(responce)
        self.setState({allUserInfo: sorted});
      });
  },
  sortData: function (data) {
    let sorted = data.data.map(function(userData) {
      return userData;
    })
    return sorted;
  },
  render: function () {
    return (
      <div className="container">
        <NavBar/>

        <div className="columns">
          <div className="column is-one-quarter">
            <ProfileCard/>
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
