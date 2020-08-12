import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div class="container">
        <div class="notification">
          This container is <strong>centered</strong> on desktop.
        </div>
        <div className="buttons">
          <Link to="/">
            <button className="button is-primary">Home</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
