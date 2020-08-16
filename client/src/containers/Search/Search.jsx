import React, { Component } from 'react';
import './Search.css';
import Navbar from '../../components/Navbar/Navbar';
import BookInfo from '../../components/BookInfo/BookInfo';
// import { Link } from 'react-router-dom';

class Search extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="columns bookrow">
            <div className="tile is-ancestor">
              <div className="tile is-parent is-narrow">
                <div className="tile is-child box bookcover">
                  {/* {this.state.ownedBooks.map((book) => (   
                  <img src={book.image} alt="" className="mx-4" />
                  ))} */}
                  <img
                    src="https://placekitten.com/320/480"
                    alt="kitten"
                    className="hoverpic"
                  />
                  <div className="middle">
                    <button className="button is-link" href={BookInfo}>
                      Click
                    </button>
                  </div>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box bookcover">
                  {/* {this.state.ownedBooks.map((book) => (   
                  <img src={book.image} alt="" className="mx-4" />
                  ))} */}
                  <img
                    src="https://placekitten.com/320/480"
                    alt="kitten"
                    className="hoverpic"
                  />
                  <div className="middle">
                    <button className="button is-link" href={BookInfo}>
                      Click
                    </button>
                  </div>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box bookcover">
                  {/* {this.state.ownedBooks.map((book) => (   
                  <img src={book.image} alt="" className="mx-4" />
                  ))} */}
                  <img
                    src="https://placekitten.com/320/480"
                    alt="kitten"
                    className="hoverpic"
                  />
                  <div className="middle">
                    <button className="button is-link" href={BookInfo}>
                      Click
                    </button>
                  </div>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box bookcover">
                  {/* {this.state.ownedBooks.map((book) => (   
                  <img src={book.image} alt="" className="mx-4" />
                  ))} */}
                  <img
                    src="https://placekitten.com/320/480"
                    alt="kitten"
                    className="hoverpic"
                  />
                  <div className="middle">
                    <button className="button is-link" href={BookInfo}>
                      Click
                    </button>
                  </div>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box bookcover">
                  {/* {this.state.ownedBooks.map((book) => (   
                  <img src={book.image} alt="" className="mx-4" />
                  ))} */}
                  <img
                    src="https://placekitten.com/320/480"
                    alt="kitten"
                    className="hoverpic"
                  />
                  <div className="middle">
                    <button className="button is-link" href={BookInfo}>
                      Click
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="polygon"></div>
        <div className= "container">
          <div className="columns bookrow">
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <div className="tile is-child box bookcover">
                  {/* {this.state.ownedBooks.map((book) => (   
                  <img src={book.image} alt="" className="mx-4" />
                  ))} */}
                  <img
                    src="https://placekitten.com/320/480"
                    alt="kitten"
                    className="hoverpic"
                  />
                  <div className="middle">
                    <button className="button is-link" href={BookInfo}>
                      Click
                    </button>
                  </div>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box bookcover">
                  {/* {this.state.ownedBooks.map((book) => (   
                  <img src={book.image} alt="" className="mx-4" />
                  ))} */}
                  <img
                    src="https://placekitten.com/320/480"
                    alt="kitten"
                    className="hoverpic"
                  />
                  <div className="middle">
                    <button className="button is-link" href={BookInfo}>
                      Click
                    </button>
                  </div>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box bookcover">
                  {/* {this.state.ownedBooks.map((book) => (   
                  <img src={book.image} alt="" className="mx-4" />
                  ))} */}
                  <img
                    src="https://placekitten.com/320/480"
                    alt="kitten"
                    className="hoverpic"
                  />
                  <div className="middle">
                    <button className="button is-link" href={BookInfo}>
                      Click
                    </button>
                  </div>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box bookcover">
                  {/* {this.state.ownedBooks.map((book) => (   
                  <img src={book.image} alt="" className="mx-4" />
                  ))} */}
                  <img
                    src="https://placekitten.com/320/480"
                    alt="kitten"
                    className="hoverpic"
                  />
                  <div className="middle">
                    <button className="button is-link" href={BookInfo}>
                      Click
                    </button>
                  </div>
                </div>
              </div>
              <div className="tile is-parent">
                <div className="tile is-child box bookcover">
                  {/* {this.state.ownedBooks.map((book) => (   
                  <img src={book.image} alt="" className="mx-4" />
                  ))} */}
                  <img
                    src="https://placekitten.com/320/480"
                    alt="kitten"
                    className="hoverpic"
                  />
                  <div className="middle">
                    <button className="button is-link" href={BookInfo}>
                      Click
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="polygon"></div>
      </div>
    );
  }
}

export default Search;
