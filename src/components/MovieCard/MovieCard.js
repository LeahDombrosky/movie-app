import React, { Component } from 'react';
import './MovieCard.css';
export default class MovieCard extends Component {
  render() {
    const { title, year, genre, director, url } = this.props.movie;
    const { deleteMovie, selectOneMovie } = this.props;
    return (
      <div className="movie-card">
        <span className="removal" onClick={() => deleteMovie(title)}>
          X
        </span>
        <a onClick={() => selectOneMovie(url)} className="pointer">
          <h1>Title: {title}</h1>
        </a>
        <p>Year: {year}</p>
        <p>Genre: {genre}</p>
        <p>Director: {director}</p>
        {/* <p>Website: {website}</p> */}
      </div>
    );
  }
}
