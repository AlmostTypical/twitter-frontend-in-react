const React = require('react');

const NavBar = React.createClass({
  render: function () {
    return (
      <div className="navBar">
        <nav className="nav">
          <div className="nav-left">
            <h3>logo</h3>
          </div>

          <div className="nav-center">
            <a className="nav-item" href="#">
      <span className="icon">
        <i className="fa fa-github"></i>
      </span>
            </a>
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
            <a className="nav-item" href="#">
              Home
            </a>
            <a className="nav-item" href="#">
              Documentation
            </a>
            <a className="nav-item" href="#">
              Blog
            </a>

            <span className="nav-item">
      <a className="button">
        <span className="icon">
          <i className="fa fa-twitter"></i>
        </span>
        <span>Tweet</span>
      </a>
      <a className="button is-primary" href="#">
        <span className="icon">
          <i className="fa fa-download"></i>
        </span>
        <span>Download</span>
      </a>
    </span>
          </div>
        </nav>
      </div>
    )
  }
});

module.exports = NavBar;