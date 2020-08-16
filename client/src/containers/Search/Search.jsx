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
            <div className="box bookcover">

              <img src="https://placekitten.com/320/480" className="hoverpic" />
              <div className="middle">
                <button className="button is-link" href={BookInfo}>
                  Click
                </button>
              </div>
            </div>
            <div className="box bookcover">

              <img src="https://placekitten.com/320/480" className="hoverpic" />
              <div className="middle">
                <button className="button is-link" href={BookInfo}>
                  Click
                </button>
              </div>
            </div>
            <div className="box bookcover">

              <img src="https://placekitten.com/320/480" className="hoverpic" />
              <div className="middle">
                <button className="button is-link" href={BookInfo}>
                  Click
                </button>
              </div>
            </div>
            <div className="box bookcover">
              <img src="https://placekitten.com/320/480" className="hoverpic" />
              <div className="middle">
                <button className="button is-link" href={BookInfo}>
                  Click
                </button>
              </div>
            </div>
            
            <div className="box bookcover">
              <img src="https://placekitten.com/320/480" className="hoverpic" />
              <div className="middle">
                <button className="button is-link" href={BookInfo}>
                  Click
                </button>
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
