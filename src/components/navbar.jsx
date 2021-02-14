import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-warning">
          <div className="container-fluid justify-content-center">
            <span className="navbar-brand mb-0 h1">STONKS ONLY GO ^</span>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
