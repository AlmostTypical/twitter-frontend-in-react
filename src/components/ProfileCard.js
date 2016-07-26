const React = require('react');

const ProfileCard = React.createClass({
  render: function () {
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

module.exports = ProfileCard