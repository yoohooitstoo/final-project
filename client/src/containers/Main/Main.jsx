import React, { Component } from 'react';
import './Main.css';
import Navbar from '../../components/Navbar/Navbar';
// import BookInfo from '../../components/BookInfo/BookInfo';
import Book from '../../components/Book/Book';
import API from '../../utils/API';
// import { Link } from 'react-router-dom';

class Main extends Component {
  state = {
    allOwnedBooks: [],
  };

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
      <div>
        <Navbar />

        {/* Searchbox needs to search database, not google books api. */}

        <div className="section">
          <div className="field">
            <label className="label is-large">Search for books around you</label>
            <div className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Book Title"
                value={this.state.searchValue}
                onChange={this.handleSearch}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-book"></i>
              </span>
            </div>
            <div className="control">
              <a className= "button is-success is-medium"
              onClick={this.handleSearchAPI}>Search</a>
            </div>
          </div>

          <div className="container is-fluid bookContainer">
            <div className="columns bookrow level">
              {this.state.allOwnedBooks.map((book) => (
                <div className="bookcover level-item">
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
