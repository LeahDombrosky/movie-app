import React, { Component } from 'react';
import './MovieTheater.css';
export default class MovieTheater extends Component{
    constructor(props){
        super(props)
        this.state ={
            count: 0
        }
    }
    render(){
        return (
        //<div className="Main-container">    
        <div className ="MovieTheater-placeholder">
          <h1>Now Playing in:</h1>
        </div>      
       
        )
    }
    }
