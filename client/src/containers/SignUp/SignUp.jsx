import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SignUp.css";
// import UserContext from "../../utils/User";

const SignUp = (props) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [password, setPassword] = useState("");
  // const user = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("you clicked submit");
    axios
      .post("/api/users", {
        username: username,
        email: email,
        zipCode: zipCode,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        // window.location.href="/account";
        props.history.push(`/account/${response.data._id}`);
      })
      .catch((err) => {
        console.log(err);
        alert("This is a 400 error- this email is already being used");
      });
  };

  // class SignUp (props) extends Component {
  //   render() {
  return (
    <div className="container">
      <br />
      <br />
      <div className="notification">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                placeholder="Text input"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>
          <label className="label">Email</label>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <label className="label">Password</label>
          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <label className="label">Zip Code</label>
            <div className="control">
              <input
                className="input"
                id="zipCode"
                type="text"
                name="zipCode"
                value={zipCode}
                onChange={(e) => {
                  setZipCode(e.target.value);
                }}
                placeholder="Text input"
              />
            </div>
          </div>
          <div className="field is-grouped is-grouped-centered">
            <p className="control">
              <button className="button is-primary" type="submit">
                Sign Up
              </button>
            </p>

            <Link to="/">
              <button className="button is-link">Home</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
