import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
class Account extends Component {

  componentDidMount(){
    console.log(this.props.match.params.id);
    // Make an axios call to get the User
    // on the User route, make sure we call .populate("books")
    // on a successful call return, set the books on state.
    // map through the books array and display them on the page. 
  }

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
