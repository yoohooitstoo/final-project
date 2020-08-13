import React from 'react';
import './BookInfo.css';

const BookInfo = () => {
  return (
    <div className="container">
      <div className="card-stacked is-horizontal" id="bookCard">
        <div className="card-image">
          <figure className="image is-2by3">
            <img
              src="https://placekitten.com/300/450"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <p className="title is-4">Book Title</p>
          <p className="subtitle is-6">Author</p>
          <div className="content">
            Description of book, limit character count to something reasonable.
            No more than two lines. Just enought to be sure you're looking at
            the right book.
            <br />
            <br />
            <p>
              <strong>Rating:</strong> X/X
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;
