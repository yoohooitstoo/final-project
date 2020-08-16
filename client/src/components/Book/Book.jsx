import React, { Component } from "react";
import BookInfo from "../../components/BookInfo/BookInfo.jsx";
import "./Book.css"

class Book extends Component {
  state = {
    showModal: false,
  };

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  book = this.props.book;

  render() {
    return (
      <>
        <img
          className="is-clickable mx-4"
          src={this.book.image}
          alt={this.book.title}
          onClick={() => this.toggleModal()}
        />
        {this.state.showModal && <BookInfo book={this.book} onClose={this.toggleModal.bind(this)} />}
      </>
    );
  }
}

export default Book;
