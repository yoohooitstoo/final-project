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
      <div className="box bookbox">
        <img
          className="is-clickable"
          src={this.book.image}
          alt={this.book.title}
          onClick={() => this.toggleModal()}
        />
        <div className="middle">
          <button 
          className="button is-outlined is-medium"
          onClick={() => this.toggleModal()}
          >
            Book Info
          </button>
        </div>
        {this.state.showModal && <BookInfo book={this.book} onClose={this.toggleModal.bind(this)} />}
      </div>
    );
  }
}

export default Book;
