import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

const Home = () => {
  return (
    <div className="container ">
      <br></br>
      <br></br>
      <div className="notification">
      <label className="label is-large">The Borrower</label>
      <p>Have extra books lying around and want some new material? Our site allows you to 
        post your books and borrow from your local neighbors! You post your books and are
         able to search through books posted in your area. You then create a social contract 
         with the other user swapping books. Once communication begins you’re ready to enjoy 
         your new books after pick up!</p>
          <br/>
        <div className="buttons">
          <Link to="/login">
            <button className="button is-primary">Login</button>
          </Link>
        </div>
        <div className="buttons">
        <Link to="/signup">
            <button className="button is-link">Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
