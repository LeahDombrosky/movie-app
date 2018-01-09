import React, { Component } from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';

export default class Header extends Component {
  render() {
    return (
      <div className="MainHeader">
        <div className="NavBar">
          <Navbar />
        </div>
        <h1 className="AppTitle">Welcome to Cinema!</h1>

        <div className="SearchHolder">
          {/* <input type="text" className="SearchInput"></input> */}
          {/* <button className="SearchButton">
            <b>Find the Movie</b>
          </button> */}
        </div>
      </div>
    );
  }
}
