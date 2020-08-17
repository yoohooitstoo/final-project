import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API.js";
import Book from "../../components/Book/Book";


class Account extends Component {
  state = {
    ownedBooks: [],
    renting: [],
  };

  // Make an axios call to get the User
  // on the User route, make sure we call .populate("books")
  // on a successful call return, set the books on state.
  // map through the books array and display them on the page.
  componentDidMount() {
    console.log(this.props.match.params.id);
    API.getOwnedBooks(this.props.match.params.id)
      .then((res) => {
        console.log("Owned Books", res.data.ownedBooks);
        console.log("Renting", res.data.renting);
        console.log(res.data);
        const ownedBooks = res.data.ownedBooks;
        const renting = res.data.renting;
        this.setState({ ownedBooks: ownedBooks, renting: renting });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="container is-fluid">
        <div className="notification has-background-warning-dark">
          <div className="buttons is-right">
            <Link to="/">
              <button className="button is-primary">Log Out</button>
            </Link>
          </div>
          <div className="buttons is-left">
            <Link to={`/addbook/${this.props.match.params.id}`}>
              <button className="button is-primary">Add Book</button>
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
                {this.state.ownedBooks.map((book) => (
                  <Book book={book} />
                  // <>
                  // <img src={book.image} alt={book.title} className="mx-4" onClick={e =>{ this.toggleModal();}} />

                  // </>
                ))}
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
                {this.state.renting.map((book) => (
                  <Book book={book} />
                ))}
              </div>
            </div>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <div className="tile is-child box">
                <Link to={`/main/${this.props.match.params.id}`}>
                  {" "}
                  <button className="button is-primary has-text-centered">
                    {" "}
                    Add Renting
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;