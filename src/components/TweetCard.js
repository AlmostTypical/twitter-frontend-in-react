const React = require('react');
const relativeDate = require('relative-date');

const TweetCard = React.createClass({
  determineDateFormat: function (date) {
    let currentDate = Date.now();
    let tweetDate = Date.parse(date);
    if (currentDate - tweetDate < 86400000) {
      tweetDate = relativeDate(tweetDate);
      return tweetDate
    } else if (currentDate - tweetDate < 31556952000) {
      return date.match(/\w\w\w\W\d+/)[0]
    } else {
      return date.match(/\w\w\w\W\d+/)[0] + ' ' + date.slice(date.length -4)
    }
    //TODO Refactor code, find a way of calculating to year end date rather than exactly a year before today
  },
  render: function () {
   return(
     <div className="tweetCard">
       <article className="media">
         <figure className="media-left">
           <p className="image is-64x64">
             <img src="http://placehold.it/128x128"/>
           </p>
         </figure>
         <div className="media-content">
           <div className="content">
             <p>
               <strong>{this.props.tweet.user.name}</strong> <small>@{this.props.tweet.user.screen_name}</small>
               <small> - {this.determineDateFormat(this.props.tweet.created_at)}</small>
               <br/>
               {this.props.tweet.text}
             </p>
           </div>
           <nav className="level">
             <div className="level-left">
               <a className="level-item">
                 <span className="icon is-small"><i className="fa fa-reply"></i></span>
               </a>
               <a className="level-item">
                 <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                 {this.props.tweet.retweet_count}
               </a>
               <a className="level-item">
                 <span className="icon is-small"><i className="fa fa-heart"></i></span>
                 {this.props.tweet.favorite_count}
               </a>
             </div>
           </nav>
         </div>
       </article>
     </div>
   )
  }
});

module.exports = TweetCard;