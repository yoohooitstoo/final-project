import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <p>Placeholder!</p>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item">My Library</a>

              <a class="navbar-item">Browse Books</a>

            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="button">
                  <a class="button is-light">Log Out</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
