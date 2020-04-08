import React, { Component } from 'react'
import logo from './star.png';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Projects from './Projects.js'
import About from './About.js'
import './App.css';

export default class App extends Component {
 render(){
  return (
    <Router>
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="wlc">
          Welcome to my website! HMMALEK
        </p>
      </header>

      <div className="Sidebar">
        <ul>
          <li><Link to={'/About'}>About</Link>
          </li>
          <li><Link to={'/Projects'}>Projects</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path='/About'component={About}/>
        <Route path='/Projects'component={Projects}/>
      </Switch>
      <div id="Content">
      </div>

    </div>
    </Router>
  );
 }
}
