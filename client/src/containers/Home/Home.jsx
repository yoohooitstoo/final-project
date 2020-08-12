import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="buttons">
          <Link to="/login">
            <button className="button is-primary">Login</button>
          </Link>
        </div>
        <div>
        <Link to="/signup">
            <button className="button is-link">Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
