import React, { Component } from 'react';
import './Main.css';
// import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      // Navbar component
      <div className="container">
        <div className="columns bookrow">
          <div class="column"></div>
          <div class="column">
            {/* //Book Cover from database */}
            <figure class="image is-320x480">
              <img src="https://placekitten.com/320/480" />
            </figure>
            {/* //Book title from database */}
            <p class="title">One</p>
          </div>
          <div class="column">
            <figure class="image is-320x480">
              <img src="https://placekitten.com/320/480" />
            </figure>
            <p class="title">Two</p>
          </div>
          <div class="column">
            <figure class="image is-320x480">
              <img src="https://placekitten.com/320/480" />
            </figure>
            <p class="title">Three</p>
          </div>
          <div class="column">
            <figure class="image is-320x480">
              <img src="https://placekitten.com/320/480" />
            </figure>
            <p class="title">Four</p>
          </div>
          <div class="column"></div>
        </div>
        <div className="columns bookrow">
          <div class="column"></div>
          <div class="column">
            <figure class="image is-320x480">
              <img src="https://placekitten.com/320/480" />
            </figure>
            <p class="title">Five</p>
          </div>
          <div class="column">
            <figure class="image is-320x480">
              <img src="https://placekitten.com/320/480" />
            </figure>
            <p class="title">Six</p>
          </div>
          <div class="column">
            <figure class="image is-320x480">
              <img src="https://placekitten.com/320/480" />
            </figure>
            <p class="title">Seven</p>
          </div>
          <div class="column">
            <figure class="image is-320x480">
              <img src="https://placekitten.com/320/480" />
            </figure>
            <p class="title">Eight</p>
          </div>
          <div class="column"></div>
        </div>
      </div>
    );
  }
}

export default Main;
