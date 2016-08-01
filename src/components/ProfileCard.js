const React = require('react');
const axios = require('axios');

const ProfileCard = React.createClass({
  getInitialState: function () {
    return ({
      loading: true
    })
  },
  componentDidMount: function () {
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

    let info = this.state.profileData;

    if (this.state.loading) {

      return (
        <h1>Loading</h1>
      )

    } else {
      return (
        <div className="profileCard item-background">
          <div className="profile-Banner">
            <img className="profile-BannerImg" src={info.banner}/>
          </div>
          <div className="profile-Content">
            <div className="profile-AvatarBox">
              <img className="profile-AvatarImg" src={info.profilePic}/>
            </div>
            <div className="profile-UserFields">
              <div className="profile-UserFields-NameBox">
                <p className="profile-UserFields-NameText">{info.userName}</p>
              </div>
              <span className="profile-UserFields-HandleBox">
                <p className="profile-UserFields-HandleText">@{info.handle}</p>
              </span>
            </div>
            <div className="profile-UserStats">
              <ul className="profile-UserStats-List">
                <li className="profile-ArrangeSizeFit">
                  <span className="profile-StatLabel">Tweets</span>
                  <span className="profile-StatValue">{info.tweetCount}</span>
                </li>
                <li className="profile-ArrangeSizeFit">
                  <span className="profile-StatLabel">Following</span>
                  <span className="profile-StatValue">{info.followingCount}</span>
                </li>
                <li className="profile-ArrangeSizeFit">
                  <span className="profile-StatLabel">Followers</span>
                  <span className="profile-StatValue">{info.followerCount}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  }
});

module.exports = ProfileCard;