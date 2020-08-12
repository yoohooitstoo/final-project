import React, { Component } from "react";
import { Link } from "react-router-dom";

class Account extends Component {
  render() {
    return (
      <div className="container is-fluid">
        <div className="notification">This is the users account.</div>
        <div className="buttons">
          <Link to="/">
            <button className="button is-primary">Home</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Account;
