import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    console.log("NAV", window.location);
    return (
      <div>
        <nav
          className="navbar is-dark is-fixed-top"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            
            <label className="label is-large ml-4">
              <i className="fas fa-book"></i> The Borrowers
            </label>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div className="navbar-end is-link">
                <a className="navbar-item is-light" href="javascript:history.back()">
                  My Account Page
                </a>
                <a className="navbar-item is-light" href="/">
                  Log Out
                </a>
              </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
