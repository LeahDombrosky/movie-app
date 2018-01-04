import React, { Component } from 'react';
import axios from 'axios';
import './MovieTheater.css';
// import MovieCard from '../MovieCard/MovieCard';
class MovieTheater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesToDidplay: [],
      baseUrl:
        'https://api.themoviedb.org/3/movie/now_playing?api_key=7d486524483397e016dc4087405127ab&language=en-US&page=1'
    };
    // this.getMovies = this.geMovies.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${this.state.baseUrl}`)
      .then(response =>
        this.setState({ moviesToDisplay: response.data.results })
      )
      // .then(response => console.log(response.data.results))
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  // getMovies() {
  //   axios
  //     .get(`${this.state.baseUrl}/api/movies`)
  //     .then(response => {
  //       this.setState({ moviesToDisplay: response.data });
  //     })
  //     .catch(console.log);
  // }

  render() {
    return (
      <div className="MovieTheater-placeholder">
        <h1>Now Playing:</h1>
        <h1>Test</h1>
      </div>
    );
    const movies = this.state.moviesToDidplay.map(m => {
      return (
        <div key={m.id}>
          <h1>Test</h1>;
          <p>Release Date: {m.release_date}</p>
          <p>Title: {m.original_title}</p>
          {/* <button className="btn btn-sp" onClick={() => this.getMovies()}>
             Show Movies
            </button> */}
        </div>
      );
    });
  }
}
export default MovieTheater;
