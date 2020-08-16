<<<<<<< HEAD
import React, { Component } from 'react';
import './Main.css';
import Navbar from '../../components/Navbar/Navbar';
import BookInfo from '../../components/BookInfo/BookInfo';
import Book from '../../components/Book/Book';
import API from '../../utils/API';
// import { Link } from 'react-router-dom';
=======
import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
// import BookInfo from "../../components/BookInfo/BookInfo";
import API from "../../utils/API";
import { Link } from 'react-router-dom';
>>>>>>> 85b41f297fab19f5455d3193af43bc16e3a05d97

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
        <div className="section">
          <div className="column box is-half-desktop is-offset-2 is-full-mobile">
              <div className="section" id="searchBox">
                <div className="field">
                  <label className="label is-large">Look for books around you</label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="text"
                      placeholder="Title..."
                      value={this.state.searchValue}
                      onChange={this.handleSearch}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-book"></i>
                    </span>
                  </div>
                </div>
                <button
                  className="button is-inverted is-outlined"
                  onClick={this.handleSearchAPI}
                >
                  Search
                </button>
            </div>
          </div>
          <div className="container is-fluid">
            <div className="columns bookrow">
              {this.state.allOwnedBooks.map((book) => (
                <div className="bookcover">
                  <Book book={book} />
                </div>
              ))}
            </div>
          </div>
          <div className="polygon"></div>
        </div>
      </div>
    );
  }
}

export default Main;
