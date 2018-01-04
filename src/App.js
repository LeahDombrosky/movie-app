import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Maps from './components/Maps/Maps';
import MovieTheater from './components/MovieTheater/MovieTheater';
// import Clock from './components/Clock';
// import Footer from './components/Footer';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    axios.get('/api/test').then(response => console.log(response));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="MainHolder" style={{ padding: 0 }}>
          <div className="GoogleMaps" style={{ padding: 0 }}>
            {/* <h1>GoogleMaps!!!</h1> */}
            <Maps
              center={{ lat: 32.78306, lng: -96.80667 }}
              zoom={12}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>

          <div className="MovieTheaters">
            <MovieTheater />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
