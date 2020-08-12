import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUp extends Component {
  render() {
    return (
      <div className="container">
        <div className="notification">
          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="text" placeholder="Text input" />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>
          <label className="label">Email</label>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="Email" />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <label className="label">Password</label>
          <div className="field">
            <p className="control has-icons-left">
              <input className="input" type="password" placeholder="Password" />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <label class="label">Zip Code</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" />
            </div>
          </div>
          <div className="field is-grouped is-grouped-centered">
            <p className="control">
              <Link to="/account">
                <button className="button is-primary">Login</button>
              </Link>
            </p>
          
        
          <Link to="/">
            <button className="button is-link">Home</button>
          </Link>
        </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
