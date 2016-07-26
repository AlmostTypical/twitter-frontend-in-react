const React = require('react');

const NavBar = React.createClass({
  render: function () {
    return (
      <div className="navBar">
        <nav className="nav">
          <div className="nav-left">
            <a className="nav-item" href="#">
              <i className="navGlyph fa fa-home fa-2x"></i> Home
            </a>
            <a className="nav-item" href="#">
              <i className="navGlyph fa fa-bolt fa-2x"></i> Moments
            </a>
            <a className="nav-item" href="#">
              <i className="navGlyph fa fa-bell fa-2x"></i> Notifications
            </a>
            <a className="nav-item" href="#">
              <i className="navGlyph fa fa-envelope fa-2x"></i> Messages
            </a>


          </div>

          <div className="nav-center">

            <a className="nav-item" href="#">
      <span className="icon">
        <i className="fa fa-twitter"></i>
      </span>
            </a>
          </div>

          <span className="nav-toggle">
    <span></span>
    <span></span>
    <span></span>
  </span>

          <div className="nav-right nav-menu">




              <figure className=" nav-item image is-150x150">
                <img src="http://placehold.it/32x32"/>
              </figure>


            <span className="nav-item">
              <a className="button">
                <span className="icon">
                  <i className="fa fa-twitter"></i>
                </span>
                <span>Tweet</span>
              </a>
            </span>
          </div>
        </nav>
      </div>
    )
  }
});

module.exports = NavBar;