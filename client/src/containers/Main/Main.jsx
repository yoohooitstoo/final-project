import React, { Component } from 'react';
import './Main.css';
import Navbar from '../../components/Navbar/Navbar';
import BookInfo from '../../components/BookInfo/BookInfo';
import Book from '../../components/Book/Book';
import API from '../../utils/API';
// import { Link } from 'react-router-dom';

class Main extends Component {
  state = {
    allOwnedBooks: [],
  };

  rentBook(book) {
    const userId = this.props.match.params.id;
    API.requestToRent(book._id, userId)
      .then((res) => {
        console.log(res);
        console.log(res.data._id);
        // this.props.history.push(`/account/${res.data._id}`);
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    console.log(this.props.match);
    API.getAllOwnedBooks().then((res) => {
      // console.log(res.data);
      const allOwnedBooks = res.data;
      console.log(allOwnedBooks);
      this.setState({ allOwnedBooks: allOwnedBooks });
    });
  }
  render() {
    return (
      // Navbar component

      <div>
        <Navbar />
        <div className="container">
          <div className="columns bookrow">
            {this.state.allOwnedBooks.map((book) => (
              <div className="box bookcover">
                <Book book={book} />

              </div>
              ))}
            </div>
        </div>
      </div>
    );
  }
}

export default Main;
