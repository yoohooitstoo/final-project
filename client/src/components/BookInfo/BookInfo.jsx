import React from 'react';
import './BookInfo.css';

const BookInfo = () => {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">About this book</p>
          <button className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          <img className= "image is-centered" src="https://placekitten.com/300/450" alt="Placeholder bookcover" />
          <p className="title is-3">Book Title</p>
          <p className="subtitle is-5">Author</p>
          <p>Description of book, limit character count to something reasonable. No
            more than two lines. Just enought to be sure you're looking at the
            right book.</p> 
          <br/>
          <p>
            <strong>Rating:</strong> X/X
          </p>

        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">Save changes</button>
          <button className="button">Cancel</button>
        </footer>
      </div>
    </div>
  );
};

export default BookInfo;
