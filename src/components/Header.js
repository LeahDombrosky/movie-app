import React, { Component } from 'react';
import './Header.css';
import Clock from './components/Clock.js';
export default class Header extends Component{

    render() {
        return (
        <div className="Main-header">
            <div className="Nav-bar"></div>
            <div className ="Clock">
                <Clock />
            </div>
        </div>
 )
}
}

