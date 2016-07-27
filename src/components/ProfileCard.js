const React = require('react');
const axios = require('axios');

const ProfileCard = React.createClass({
  getInitialState: function () {
    return ({
      loading: true
    })
  },
  componentDidMount: function () {

    console.log('mountinf')
    this.getUserTweet()
  },
  getUserTweet: function () {
    let self = this;
    let url = 'https://protected-oasis-31937.herokuapp.com/tweets/' + this.props.user;
    axios.get(url)
      .then(function (response) {
        self.setProfileCardInfo(response.data.tweetData[0].user)
      });


  },
  setProfileCardInfo: function (info) {
    console.log('info', info);
    let data = {
      banner: info.profile_banner_url,
      profilePic: info.profile_image_url,
      tweetCount: info.statuses_count,
      followerCount: info.followers_count,
      followingCount: info.friends_count,
      userName: info.name,
      handle: info.screen_name,
    };

    console.log(data);
    this.setState({
      profileData: data,
      loading: false
    })
  },
  render: function () {

    let info = this.state.profileData

    if (this.state.loading) {

      return (
        <h1>Loading</h1>
      )

    } else {
      return (
        <div className="profileCard panel">

          <div className="panel-heading has-text-centered ">
            <img src={info.banner}/>
          </div>
          <img src={info.profilePic}/>
          <h2>{info.userName}</h2>
          <p>@{info.handle}</p>
          <div>
            <table>
              <thead>
              <tr>
                <th>Tweet</th>
                <th>Following</th>
                <th>Followers</th>
              </tr>
              </thead>

              <tbody>
              <tr>
                <td>{info.tweetCount}</td>
                <td>{info.followingCount}</td>
                <td>{info.followerCount}</td>
              </tr>
              </tbody>
            </table>
          </div>


        </div>
      )
    }


  }
});

module.exports = ProfileCard;