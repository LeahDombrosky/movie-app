import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Maps from './components/Maps.js';
import MovieTheater from './components/MovieTheater.js';
//import Clock from './components/Clock.js';

import axios from 'axios';


class App extends Component {
  // componentDidMount() {
  //   axios.get("/api/test").then(response => console.log(response));
  // }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to Cinema!</h1>
          {/* <Clock />  */}
        </header>
        {/* <Header />  */}
        {/* <p className="App-intro">
          Body will appear <code>src/App.js!!!!!!!!!!!!!!</code> and save to reload.
        </p> */}
        
        <div className="Search-holder">
            <input type="text" className="SearchInput"></input>
            <button className ="SearchButton">Enter Location, Submit</button>
        </div>
        <div className="Main-holder"style ={{padding: 0}}>

          <div className="GoogleMaps"style ={{padding: 0}}>
          {/* <h1>GoogleMaps!!!</h1> */}
            <Maps 
              center={{lat: 32.783060, lng: -96.806670}}
              zoom={12} 
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />  
          </div>

          <div className="Movie-Theaters">
            <MovieTheater /> 
          </div>
        </div>
     
        {/* <Footer /> */}
      </div>
      
    );
  }
  
}

export default App;
