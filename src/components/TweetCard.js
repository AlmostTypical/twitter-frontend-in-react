const React = require('react');
const relativeDate = require('relative-date');

const TweetCard = React.createClass({
  getInitialState: function () {
    return ({
      showModal: false
    })
  },
  toggleModal: function () {
    let toggled = !this.state.showModal;
    this.setState({showModal: toggled})
  },
  propTypes: {
    tweet: React.PropTypes.object
  },
  processText: function (text) {
    let words = text.split(' ');
    let hashPattern = /#[\w\d]+[a-zA-Z]+[\w\d]+/;
    let mentionPattern = /@[\w\d]+[a-zA-Z]+[\w\d]+/;
    let urlPattern = 'http://';
    let processed =  words.map(function (word) {
      if(hashPattern.test(word) || mentionPattern.test(word) || word.startsWith('http')){
        if (word.startsWith('http')) {
          return (
            [<a href={word}>{word}</a>, ' ']
          )
        } else {
          let url = 'https://twitter.com/hashtag/' + word.slice(1);
          console.log('url', url);
          return (
            [<a href={url}>{word}</a>, ' ']
          )
        }
      }else{
        return word + ' '
      }
    });
    return processed
  },
  processImages: function (tweetData) {
    if(tweetData.entities.media !== undefined){
      let imageUrl  = tweetData.entities.media[0].media_url;
      return(
        <div className="adaptiveMedia image is-505x508">
          <img src={imageUrl}/>
        </div>
      )
    }else{
      return null
    }
  },
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
    let image = this.processImages(this.props.tweet);
    let text = this.processText(this.props.tweet.text);
    console.log('comp',image);
    let modal = this.state.showModal
      ? <div className="modal is-active" onClick={this.toggleModal}>
          <div className="modal-background"></div>
            <div className="modal-container">
              <div className="modal-content tweetModal">
                {image}
              </div>
            </div>
            <button className="modal-close"></button>
        </div>
      : null;

    return(
     <div className="tweetCard item-background">
       {modal}
       <article className="media" onClick={this.toggleModal}>
         <figure className="media-left">
           <p className="image is-48x48">
             <img className="tweetCardProfileImage" src={this.props.tweet.user.profile_image_url}/>
           </p>
         </figure>
         <div className="media-content">
           <div className="content">
             <p>
               <strong>{this.props.tweet.user.name}</strong> <small className="tweet-handle">@{this.props.tweet.user.screen_name}</small>
               <small className="tweet-handle"> - {this.determineDateFormat(this.props.tweet.created_at)}</small>
               <br/>
               {text}
             </p>
             {image}
           </div>
           <nav className="level">
             <div className="level-left">
               <a className="level-item tweetBar">
                 <span className="icon is-small"><i className="fa fa-reply"></i></span>
               </a>
               <a className="level-item tweetBar">
                 <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                 <span className="tweetCardCounter" >{this.props.tweet.retweet_count}</span>
               </a>
               <a className="level-item tweetBar">
                 <span className="icon is-small"><i className="fa fa-heart"></i></span>
                  <span className="tweetCardCounter">{this.props.tweet.favorite_count}</span>
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