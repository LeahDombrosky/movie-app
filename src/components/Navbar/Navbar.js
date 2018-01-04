import React, { Component } from 'react';
import './Navbar.css';
import Clock from 'react-live-clock';

export default class Navbar extends Component {
  render() {
    return (
      <div className="Main-Navbar">
        <div className="Navbar-Container">
          <ul>
            <li>HOME</li>
            <li>MOVIE</li>
            <li>ABOUT</li>
          </ul>
        </div>
        <button className="Button">MENU</button>
        <div className="Clock">
          <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Central'} />
        </div>

        {/* <div className = 'hamburger'>MENU</div> */}
      </div>
    );
  }
}
