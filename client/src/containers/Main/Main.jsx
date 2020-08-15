import React, { Component } from 'react';
import './Main.css';
import Navbar from "../../components/Navbar/Navbar"
import BookInfo from '../../components/BookInfo/BookInfo';
// import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      // Navbar component
      <div>
        < Navbar />
        <div classNameName="container">
          <div className="columns bookrow">
            <div className="column"></div>
            <div className="column">
              {/* //Book Cover from database */}
              <div className="figure is-320x480 bookcover">
                <img src="https://placekitten.com/320/480" className= "hoverpic"/>
                <div className= "middle">
                  <button className="button is-link" href ={BookInfo}>Click</button>
                </div>
              </div>
              {/* //Book title from database */}
              <p className="title">One</p>
            </div>
            <div className="column">
              {/* //Book Cover from database */}
              <div className="figure is-320x480 bookcover">
                <img src="https://placekitten.com/320/480" className= "hoverpic"/>
                <div className= "middle">
                  <button className="button is-link" href ={BookInfo}>Click</button>
                </div>
              </div>
              {/* //Book title from database */}
              <p className="title">One</p>
            </div>
            <div className="column">
              {/* //Book Cover from database */}
              <div className="figure is-320x480 bookcover">
                <img src="https://placekitten.com/320/480" className= "hoverpic"/>
                <div className= "middle">
                  <button className="button is-link" href ={BookInfo}>Click</button>
                </div>
              </div>
              {/* //Book title from database */}
              <p className="title">One</p>
            </div>
            <div className="column">
              {/* //Book Cover from database */}
              <div className="figure is-320x480 bookcover">
                <img src="https://placekitten.com/320/480" className= "hoverpic"/>
                <div className= "middle">
                  <button className="button is-link" href ={BookInfo}>Click</button>
                </div>
              </div>
              {/* //Book title from database */}
              <p className="title">One</p>
            </div>
            <div className="column">
              {/* //Book Cover from database */}
              <div className="figure is-320x480 bookcover">
                <img src="https://placekitten.com/320/480" className= "hoverpic"/>
                <div className= "middle">
                  <button className="button is-link" href ={BookInfo}>Click</button>
                </div>
              </div>
              {/* //Book title from database */}
              <p className="title">One</p>
            </div>
            <div className="column"></div>
          </div>
        </div>
        <div className= "container is-fluid">
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <div className="tile is-child box bookcover" >
                {/* {this.state.ownedBooks.map((book) => (   
                  <img src={book.image} alt="" className="mx-4" />
                  ))} */}
                <img src="https://placekitten.com/320/480" className="hoverpic"/>
                <div className= "middle">
                  <button className="button is-link" href ={BookInfo}>Click</button>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box bookcover" >
                {/* {this.state.ownedBooks.map((book) => (   
                  <img src={book.image} alt="" className="mx-4" />
                  ))} */}
                <img src="https://placekitten.com/320/480" className="hoverpic"/>
                <div className= "middle">
                  <button className="button is-link" href ={BookInfo}>Click</button>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box bookcover" >
                {/* {this.state.ownedBooks.map((book) => (   
                  <img src={book.image} alt="" className="mx-4" />
                  ))} */}
                <img src="https://placekitten.com/320/480" className="hoverpic"/>
                <div className= "middle">
                  <button className="button is-link" href ={BookInfo}>Click</button>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box bookcover" >
                {/* {this.state.ownedBooks.map((book) => (   
                  <img src={book.image} alt="" className="mx-4" />
                  ))} */}
                <img src="https://placekitten.com/320/480" className="hoverpic"/>
                <div className= "middle">
                  <button className="button is-link" href ={BookInfo}>Click</button>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box bookcover" >
                {/* {this.state.ownedBooks.map((book) => (   
                  <img src={book.image} alt="" className="mx-4" />
                  ))} */}
                <img src="https://placekitten.com/320/480" className="hoverpic"/>
                <div className= "middle">
                  <button className="button is-link" href ={BookInfo}>Click</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
