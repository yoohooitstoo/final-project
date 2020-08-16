import React, { Component } from "react";
import "./Main.css";
import Navbar from "../../components/Navbar/Navbar";
import BookInfo from "../../components/BookInfo/BookInfo";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Link } from 'react-router-dom';

class Main extends Component {
  state = {
    allOwnedBooks: [],
  }

  componentDidMount() {
    console.log(this.props.match);
    API.getAllOwnedBooks().then((res) => {
      console.log(res.data);
      const allOwnedBooks= res.data;
      console.log(allOwnedBooks);
      this.setState({ allOwnedBooks: allOwnedBooks,})

    });
  }
  render() {
    return (
      // Navbar component
      <div>
        <Navbar />
        <div className="buttons" >
        <Link to={`/account/${this.props.match.params.id}`}>
          <button className="button is-primary">My Account</button>
        </Link>
        </div>
        <div className="container is-fluid">
          <div className="tile is-ancestor">
          {this.state.allOwnedBooks.map((book) => (
          <div className="tile is-parent">
              <div className="tile is-child box bookcover">
                {/* {this.state.ownedBooks.map((book) => (   
                  <img src={book.image} alt="" className="mx-4" />
                  ))} */}
                <img
                  src={book.image}
                  alt="kitty"
                  className="hoverpic"
                />
                <div className="middle">
                  <button className="button is-link" href={BookInfo}>
                    Click
                  </button>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
