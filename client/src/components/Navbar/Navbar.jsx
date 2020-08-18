import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
          <label className="label is-large ml-4">The Borrowers</label>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="/account">
          Pages
        </a>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" href="/account">
           My Account Page
          </a>
      
        </div>
      </div>


          <div id="navbarBasicExample" class="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                  <a className="button is-light" href="/">Log Out</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
