import React, { Component } from 'react'
import logo from './star.png';
import Sidebar from './Sidebar.js'
import './App.css';

export default class Projects extends Component {
 render(){
  return (
    <div className="Pro">

        <div id="reverb">
          <h3>Measuring reverberations in a room using a logSweep</h3>
          <p> Description</p>
          <a  className="App-link"  href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > project </a>
        </div>
        <div id="weather">
          <h3>A weather application using ReactJs</h3>
          <p> Description</p>
          <a  className="App-link"  href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > project </a>
        </div>
        <div id="paper">
          <h3>Pydiogment</h3>
          <p> Description</p>
          <a  className="App-link"  href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > project </a>
        </div>

    </div>
    );
  }
}
