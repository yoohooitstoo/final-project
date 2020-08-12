import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
// import UserContext from "../../utils/User"

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="notification">
          Login Page that will take the user to their account
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="Email" />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input className="input" type="password" placeholder="Password" />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <div className="buttons">
              <Link to="/account">
                <button className="button is-primary">Login</button>
              </Link>
            </div>
          </div>
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
