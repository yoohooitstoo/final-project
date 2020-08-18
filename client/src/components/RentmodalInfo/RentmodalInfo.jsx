import React, { Component } from "react";
import "./RentmodalInfo.css";
import API from "../../utils/API";
class RentmodalInfo extends Component {
  book = this.props.book;
  rentBook(book) {
    const user = this.props.user;
    console.log(this.props.user);
    console.log(book);
    API.requestToRent(book._id, user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    // Close modal
    this.props.onClose();

    // Send email to book owner
    window.location.href = `mailto:${book.owner.email}?subject=Rental%20Request%3A%20${book.title}&body=Hello%20${book.owner.username}!%0D%0A%0D%0AI%20have%20sent%20a%20request%20to%20rent%20your%20book%2C%20${book.title}.%20Look%20forward%20to%20hearing%20from%20you%20soon!%0D%0A%0AThanks%2C%0D%0A%22YOUR SIGNATURE HERE%22`;
  }

  render() {
    console.log("Rent this book", this.book);
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
            <br />
            <p className="subtitle is-5">Author(s): {this.book.authors.join(", ")}</p>
            <br />
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
