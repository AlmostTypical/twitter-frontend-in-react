const React = require('react');

const TweetCard = React.createClass({
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
               <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
               <br/>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
             </p>
           </div>
           <nav className="level">
             <div className="level-left">
               <a className="level-item">
                 <span className="icon is-small"><i className="fa fa-reply"></i></span>
               </a>
               <a className="level-item">
                 <span className="icon is-small"><i className="fa fa-retweet"></i></span>
               </a>
               <a className="level-item">
                 <span className="icon is-small"><i className="fa fa-heart"></i></span>
               </a>
             </div>
           </nav>
         </div>
         <div className="media-right">
           <button className="delete"></button>
         </div>
       </article>

     </div>
   )
  }
});

module.exports = TweetCard