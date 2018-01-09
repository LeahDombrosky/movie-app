import React, { Component } from 'react';
import axios from 'axios';
import './MovieTheater.css';
// import MovieCard from '../MovieCard/MovieCard';
class MovieTheater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesToDisplay: [],
      baseUrl:
        'https://api.themoviedb.org/3/movie/now_playing?api_key=7d486524483397e016dc4087405127ab&language=en-US&page=1'
    };
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
    const movies = this.state.moviesToDisplay.map(m => {
      return (
        <div key={m.id}>
          {/* <p>Release Date: {m.release_date}</p> */}
          <p>
            <b>Title: </b>
            {m.title}
          </p>
        </div>
      );
    });
    return (
      <div className="MovieTheater-placeholder">
        <h1>Now Playing:</h1>
        {movies}
      </div>
    );
  }
}
export default MovieTheater;
