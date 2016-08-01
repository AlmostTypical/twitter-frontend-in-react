const React = require('react');

const SideFoot = React.createClass({
  render: function () {
    return(
      <div className="sidefoot">
        <ul className="footer-box">
          <li className="footer-item">About</li>
          <li className="footer-item">Help</li>
          <li className="footer-item">Terms</li>
          <li className="footer-item">Privacy</li>
          <li className="footer-item">Cookies</li>
          <li className="footer-item">Ads info</li>
          <li className="footer-item">Brand</li>
          <li className="footer-item">Blog</li>
          <li className="footer-item">Status</li>
          <li className="footer-item">Apps</li>
          <li className="footer-item">Jobs</li>
          <li className="footer-item">Businesses</li>
          <li className="footer-item">Media</li>
          <li className="footer-item">Developers</li>
        </ul>
      </div>
    )
  }
});

module.exports = SideFoot