import React, { Component } from 'react';
import { searchResults } from "../../services/apiService";
import "./AddBook.css";
// import axios from "axios";
import { saveBook } from "../../services/bookService";
// import PropTypes from 'prop-types';
// import Search from 'client/src/components/Search.js';

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

  saveBook = async(book) => {
    try {
        console.log(book);
    const result = await saveBook(book.title, book.authors, book.description, book.image, book.link)
    console.log(result); 
    alert("You saved this book!")
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>


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
                <div className= "col-sm-3"><img src={book.image}/></div>
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