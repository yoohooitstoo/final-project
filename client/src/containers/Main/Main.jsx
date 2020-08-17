import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
// import BookInfo from "../../components/BookInfo/BookInfo";
import API from "../../utils/API";
import { Link } from 'react-router-dom';

class Main extends Component {
  state = {
    allOwnedBooks: [],
  }

  rentBook(book) {
    const user = this.props.match.params;
    // console.log(this.props.match.params)
    API.requestToRent(book._id, user)
      .then((res) => {
        console.log(res);
        console.log(res.data._id);
        // this.props.history.push(`/account/${res.data._id}`);
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    // console.log(this.props.match);
    API.getAllOwnedBooks().then((res) => {
      // console.log(res.data);
      const allOwnedBooks= res.data;
      // console.log(allOwnedBooks);
      this.setState({ allOwnedBooks: allOwnedBooks,})
    });
  }
  render() {
    // console.log(this.props.match.params.id);  
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
                <img
                  src={book.image}
                  alt={book.title}
                  className="hoverpic"
                />
                <div className="middle">
                  <button className="button is-link" onClick={() =>this.rentBook(book)} >
                    Rent Book
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
