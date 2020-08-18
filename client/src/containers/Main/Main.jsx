import React, { Component } from 'react';
import './Main.css';
import Navbar from '../../components/Navbar/Navbar';
// import BookInfo from '../../components/BookInfo/BookInfo';
import Rentmodal from '../../components/Rentmodal/Rentmodal';
import API from '../../utils/API';

// import { Link } from 'react-router-dom';

class Main extends Component {
  state = {
    allOwnedBooks: [],
  };

  // rentBook(book) {
  //   const user = this.props.match.params;
  // //console.log(this.props.match.params)
  // console.log("here")
  //   API.requestToRent(book._id, user)
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data._id);
  //       // this.props.history.push(`/account/${res.data._id}`);
  //     })
  //     .catch((err) => console.log(err));
  // }

  componentDidMount() {
    console.log(this.props.match.params.id);
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

        <div className="section nearby">

          
          {/* <div className="field">
            <label className="label is-large">Search for books around you</label> */}
            {/* <div className="control has-icons-left">
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
              <a href="/#" className= "button is-success is-medium"
              onClick={this.handleSearchAPI}>Search</a>
            </div> */}

          {/* </div> */}

          <div className="container is-fluid bookContainer">
            <div className="columns bookrow level">
              {this.state.allOwnedBooks.map((book) => (
                <div className="bookcover level-item">
                  <Rentmodal user={this.props.match.params.id} book={book} />
                </div>
              ))}
            </div>
          </div>
          <div className="polygon"></div>
          <div className= "container is-fluid browsehero">
          <section class="hero is-dark">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">Browse books around you</h1>
                <h2 class="subtitle">Request a book to contact the owner</h2>

              </div>
            </div>
          </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
