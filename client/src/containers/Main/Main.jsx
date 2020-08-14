import React, { Component } from 'react';
import './Main.css';
// import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      // Navbar component
      <div className="container">
        <div className="columns is-full bookrow">
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">One</p>
                <p class="subtitle">Subtitle</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Two</p>
                <p class="subtitle">Subtitle</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Three</p>
                <p class="subtitle">Subtitle</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Four</p>
                <p class="subtitle">Subtitle</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Four</p>
                <p class="subtitle">Subtitle</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Four</p>
                <p class="subtitle">Subtitle</p>
              </article>
            </div>
          </div>
        </div>
        <div className="columns is-full bookrow">
          <div class="tile is-ancestor">
            <div class="tile is-parent image">
              <figure class="image is-3by2">
                <img src="https://placekitten.com/200/300" alt="dumb"/>
              </figure>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Two</p>
                <p class="subtitle">Subtitle</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Three</p>
                <p class="subtitle">Subtitle</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Four</p>
                <p class="subtitle">Subtitle</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Four</p>
                <p class="subtitle">Subtitle</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Four</p>
                <p class="subtitle">Subtitle</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
