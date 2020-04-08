import React, { Component } from 'react'
import logo from './star.png';
import './App.css';

export default class Projects extends Component {
 render(){
  return (
    <div className="main">

        <div id="reverb">
          <h3>Measuring reverberations in a room using a logSweep</h3>
          <p> The goal of this project is being able to get an acoustic information about a room without any knowledge of its geometry.<br/>
               To do so, you can emit a logsweep in the room and recorded. Then you can extract the RT60 from the energy's curve.</p>
          <a  className="App-link"  href="https://github.com/HMMalek/ReverberationMeasurement" target="_blank" rel="noopener noreferrer" > project </a>
        </div>
        <div id="weather">
          <h3>A weather application using ReactJs</h3>
          <p> Description</p>
          <a  className="App-link"  href="https://hmmalek.github.io/WeatherApp/" target="_blank" rel="noopener noreferrer" > project </a>
        </div>
        <div id="paper">
          <h3>Pydiogment</h3>
          <p> A contributor in the Pydiogment project</p>
          <a  className="App-link"  href="https://github.com/SuperKogito/pydiogment" target="_blank" rel="noopener noreferrer" > project </a>
        </div>

    </div>
    );
  }
}
