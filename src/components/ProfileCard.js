const React = require('react');

const ProfileCard = React.createClass({
  collectProfileCard: function () {
    let userTweet = this.state.currentUserTweets[0];
    return {
      banner: userTweet.profile_banner_url,
      profilePic: userTweet.profile_image_url,
      tweetCount: userTweet.statuses_count,
      followerCount: userTweet.followers_count,
      followingCount: userTweet.friends_count,
      handle: this.state.currentUser,
      userName: userTweet.name
    }
  },
  render: function () {
    console.log(this.props.info);
   return(
     <div className="profileCard panel">

       <div className="panel-heading has-text-centered ">
         <img src='https://pbs.twimg.com/profile_banners/3803349454/1456324657/1500x500'/>
       </div>

       <div>

       </div>


     </div>
   )
  }
});

module.exports = ProfileCard;