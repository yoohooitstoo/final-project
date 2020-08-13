import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


class Account extends Component {
  render() {
    return (
      <div className="container is-fluid">
        <div className="notification has-background-warning-dark">
          <div className="buttons is-right">
            <Link to="/">
              <button className="button is-primary">
                Log Out
              </button>
            </Link>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <div className="tile is-child box">
                <p className="title has-text-centered">Your Library</p>
              </div>
            </div>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <div className="tile is-child box">
                <p className="title has-text-centered">Book</p>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box">
                <p className="title has-text-centered">Book</p>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box">
                <p className="title has-text-centered">Book</p>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box">
                <p className="title has-text-centered">Book</p>
              </div>
            </div>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <div className="tile is-child box">
                <p className="title has-text-centered">Borrowed Library</p>
              </div>
            </div>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <div className="tile is-child box">
                <p className="title has-text-centered">Book</p>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box">
                <p className="title has-text-centered">Book</p>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box">
                <p className="title has-text-centered">Book</p>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box">
                <p className="title has-text-centered">Book</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
