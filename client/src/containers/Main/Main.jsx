import React, { Component } from 'react';
import './Main.css';
import Navbar from "../../components/Navbar/Navbar"
import BookInfo from '../../components/BookInfo/BookInfo';
// import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      // Navbar component
      <div>
        < Navbar />
        <div classNameName="container">
          <div className="columns bookrow">
            <div className="column"></div>
            <div className="column">
              {/* //Book Cover from database */}
              <div className="figure is-320x480 bookcover">
                <img src="https://placekitten.com/320/480"/>
                <div className= "middle">
                  <button className="button is-link" href ={BookInfo}>Click</button>
                </div>
              </div>
              {/* //Book title from database */}
              <p className="title">One</p>
            </div>
            <div className="column">
              <figure className="image is-320x480">
                <img src="https://placekitten.com/320/480" />
              </figure>
              <p className="title">Two</p>
            </div>
            <div className="column">
              <figure className="image is-320x480">
                <img src="https://placekitten.com/320/480" />
              </figure>
              <p className="title">Three</p>
            </div>
            <div className="column">
              <figure className="image is-320x480">
                <img src="https://placekitten.com/320/480" />
              </figure>
              <p className="title">Four</p>
            </div>
            <div className="column"></div>
          </div>
          <div className="columns bookrow">
            <div className="column"></div>
            <div className="column">
              <figure className="image is-320x480">
                <img src="https://placekitten.com/320/480" />
              </figure>
              <p className="title">Five</p>
            </div>
            <div className="column">
              <figure className="image is-320x480">
                <img src="https://placekitten.com/320/480" />
              </figure>
              <p className="title">Six</p>
            </div>
            <div className="column">
              <figure className="image is-320x480">
                <img src="https://placekitten.com/320/480" />
              </figure>
              <p className="title">Seven</p>
            </div>
            <div className="column">
              <figure className="image is-320x480">
                <img src="https://placekitten.com/320/480" />
              </figure>
              <p className="title">Eight</p>
            </div>
            <div className="column"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
