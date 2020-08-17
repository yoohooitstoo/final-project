import React, { Component } from "react";
import "./RentmodalInfo.css";
import API from "../../utils/API";
class RentmodalInfo extends Component {
state = {
  allOwnedBooks : []
}
  book = this.props.book;
  rentBook(book) {
    const user = this.props.user;
    console.log(this.props.user)
  console.log(book)
    API.requestToRent(book._id, user)
      .then((res) => {
          console.log(res)
        // console.log(res);
        // console.log(res.data._id);
        // this.props.history.push(`/account/${res.data._id}`);
      })
      .catch((err) => console.log(err));
  }
//   bookRented(book, requester) {
//     console.log(requester);
//     console.log(book._id);
//     API.bookRented(requester, book._id);
//   }
//   deleteBook(book) {
//     console.log(this.book._id);
//     API.deleteOwnedBook(this.book._id)
//       .then((res) => {
//         console.log(res);
//         this.props.onClose();
//         window.location.reload();
//       })
//       .catch((err) => console.log(err));
//   }
  render() {
    console.log(this.book);
    return (
      <div className="modal is-active">
        <div
          className="modal-background"
          onClick={() => this.props.onClose()}
        ></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Book Preview</p>
            <button
              className="delete modal-card-title"
              aria-label="close"
              onClick={() => this.props.onClose()}
            ></button>
          </header>
          <section className="modal-card-body">
            <img
              src={this.book.image}
              alt={this.book.title}
              className="book-cover mr-4"
              style={{ float: "left" }}
            />
            <p className="title is-3">{this.book.title}</p>
            <br/>
            <p className="subtitle is-5">Author(s): {this.book.authors}</p>
            <br/>
            <p className="has-text-justified">
              <strong>Description:</strong> {this.book.description}
            </p>
            <br />
            {/* <p className="buttons are-small">
              <strong>Requesters:</strong>{" "}
              {this.book.requesters.map((requester) => (
                <button key={requester._id} className="button is-success is-outlined" onClick={() => this.bookRented(this.book, requester)}>
                  <span>{requester.username}</span>
                </button>
              ))}
            </p> */}
          </section>
          <footer className="modal-card-foot">
            <button
              className="button is-danger"
              onClick={() => this.rentBook(this.book)}
            >
              Request To Rent
            </button>
            {/* <button
              className="button is-warning"
            >
              Book Returned
            </button> */}
            {/* <button className="button">Remove Button</button> */}
          </footer>
        </div>
      </div>
    );
  }
}
export default RentmodalInfo;