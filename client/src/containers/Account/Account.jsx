import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API.js";
import BookInfo from "../../components/BookInfo/BookInfo.jsx";

class Account extends Component {
  state = {
    ownedBooks: [],
    renting: [],
    show: false
  };

  toggleModal = e => {
    this.setState({
      show: true
    });
    console.log("you clicked")
  };

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  }
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
                  <>
                  <img src={book.image} alt="" className="mx-4" onClick={e =>{ this.toggleModal();}} />
                  < BookInfo show={this.state.show} onClose={this.showModal} toggleModal={this.toggleModal} title={book.title} image= {book.image} author={book.author}  />
                  </>
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
                <p className="title has-text-centered">Book</p>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box">
                <p className="title has-text-centered" >Click here for modal</p>
                <div className="modal">
                  <div className="modal-background"></div>
                  <div className="modal-card">
                    <header className="modal-card-head">
                      <p className="modal-card-title">this.props</p>
                      <button className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                      <img
                        className="image"
                        src="https://placekitten.com/300/450"
                        alt="Placeholder bookcover"
                        id="bookcover-modal"
                      />
                      <p className="title is-3"></p>
                      <p className="subtitle is-5">Author</p>
                      <p>
                        Description of book, limit character count to something
                        reasonable. No more than two lines. Just enought to be
                        sure you're looking at the right book.
                      </p>
                      <br />
                      <p>
                        <strong>Rating:</strong> X/X
                      </p>
                    </section>
                    <footer className="modal-card-foot">
                      <button className="button is-success">
                        Add to Library
                      </button>
                      <button className="button">Cancel</button>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box">
                <p className="title has-text-centered">Book</p>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box">
                <Link to={`/main/${this.props.match.params.id}`}>
                  {" "}
                  <button className="button is-primary has-text-centered"> Add Renting</button>
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
