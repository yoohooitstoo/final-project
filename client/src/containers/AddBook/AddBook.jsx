import React, { Component } from 'react';
import { searchResults } from "../../services/apiService";
import "./AddBook.css";
import BookInfo from '../../components/BookInfo/BookInfo';


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
        <div>
      
        </div>

      </div>
      
    );
  }
}



export default AddBook;
