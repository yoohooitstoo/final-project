import React, { Component } from 'react';
import "./Browse.css"
import "bulma/css/bulma.css"
// import bulmaCarousel from "bulma-carousel";

// import PropTypes from 'prop-types';
// import Search from 'client/src/components/Search.js';
// import bulmaCarousel from '~bulma-carousel/dist/js/bulma-carousel.min.js';

class Browse extends Component {
  // state = {
  //   searchValue: '',
  //   booksSearched: [],
  // };
  // handleSearch = (event) => {
  //   this.setState({ searchValue: event.currentTarget.value });
  // };
  // handleSearchAPI = async () => {
  //   const { data } = await searchResults(this.state.searchValue);
  //   console.log(data);
  //   const booksSearched = [];
  //   data.items.forEach((value, index) => {
  //     const authors = value.volumeInfo.authors;
  //     const title = value.volumeInfo.title;
  //     const image = value.volumeInfo.imageLinks.thumbnail;
  //     const object = { authors, title, description, image, link };
  //     console.log(object);
  //     booksSearched.push(object);
  //   });
  //   this.setState({ booksSearched: booksSearched });
  // };

  render() {
    return (
      <div>

        <div class="section">
          <div class="box" id="searchBox">
            <div class="field">
              <label class="label">Search</label>
              <div class="control has-icons-left">
                <input 
                  class="input" 
                  type="text" 
                  placeholder="Title..."
                />
                <span class="icon is-small is-left">
                    <i class="fas fa-book"></i>
                </span>
              </div>
            </div>
            <button
              class="button is-inverted is-outlined"
              onClick={this.handleSearchAPI}
            >
              Search
            </button>
          </div>
        </div>

      </div>
    );
  }
}



export default Browse;
