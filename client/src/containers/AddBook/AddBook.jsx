import React, { Component } from 'react';
import { searchResults } from "../../services/apiService";
import "./AddBook.css";
///testing bookinfo component
import BookInfo from '../../components/BookInfo/BookInfo';


// import axios from "axios";
import { saveBook } from "../../services/bookService";
// import PropTypes from 'prop-types';
// import Search from 'client/src/components/Search.js';
import API from "../../utils/API.js";

class AddBook extends Component {
  state = {
    searchValue: '',
    booksSearched: [],
  };
  handleSearch = (event) => {
    
    this.setState({ searchValue: event.currentTarget.value });
  };
  handleSearchAPI = async () => {
    const { data } = await searchResults(this.state.searchValue);
    console.log(data);
    const booksSearched = [];
    data.items.forEach((value, index) => {
      const authors = value.volumeInfo.authors;
      const title = value.volumeInfo.title;
      const rating = value.volumeInfo.averageRating;
      const image = value.volumeInfo.imageLinks.thumbnail;
      const object = { authors, title, rating, image };
      console.log(object);
      booksSearched.push(object);
    });
    this.setState({ booksSearched: booksSearched });
  };

  saveBook() {
    console.log(this.props.match.params.id)
    API.addOwnedBook(this.props.match.params.id)
    .then(res => {
      console.log(saveBook);
      console.log(res.data);


    //   console.log(res.data._id)
    //  this.props.history.push(`/account/${res.data._id}`);
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <BookInfo />
        <div className="section">
          <div className="box" id="searchBox">
            <div className="field">
              <label className="label">Search</label>
              <div className="control has-icons-left">
                <input 
                  className="input" 
                  type="text" 
                  placeholder="Title..."
                  value= {this.state.searchValue}
                  onChange= {this.handleSearch}
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

        <div className="section">
        <div className="jumbotron">
          {this.state.booksSearched.map((book) => (
            <div className="jumbotron">
              <div className="row">
                <div className="col d-flex justify-content-around">
                  <div>{book.title}</div>
                  <div>
                    <button className="btn btn-secondary">
                      View
                    </button>
                    <button className="btn btn-primary" onClick= {() => this.saveBook(book)}>Add to Library</button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-start">
                  Written By: {book.authors}
                </div>
              </div>
              <div className="row">
                <div className= "col-sm-3"><img src={book.image} alt="bookcover"/></div>
                <div className="col-sm-9">{book.description}</div>
              </div>
            </div>
          ))}
        </div>
        </div>
        </div>
    );
  }
}

export default AddBook;