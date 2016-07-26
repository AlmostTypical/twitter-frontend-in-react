const React = require('react');
const ReactDOM = require('react-dom');
const TrendsDiv = require('./components/TrendsDiv');
const NavBar = require('./components/NavBar');
const ProfileCard =  require('./components/ProfileCard')

const App = React.createClass({
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

          </div>
          <div className="column is-one-quarter">

          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
