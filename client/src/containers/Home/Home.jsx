import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="container ">
      <br></br>
      <br></br>
      <div className="notification home">
        <label className="label is-large">
          
            <i className="fas fa-book mr-2" ></i>
          
          The Borrowers
        </label>
        <p>
          Have extra books lying around and want some new material? Our site
          allows you to post your books and borrow from your local neighbors!
          You post your books and are able to search through books posted in
          your area. You then create a social contract with the other user
          swapping books. Once communication begins you’re ready to enjoy your
          new books after pick up!
        </p>
        <br />
        <div className="buttons is-centered">
          <a className="button is-primary" href="/login">Login</a>
          <a className="button is-success" href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
