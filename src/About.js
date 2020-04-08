import React, { Component } from 'react'
import logo from './star.png';
import './App.css';

export default class About extends Component {

 constructor(props, context) {
    super(props, context);
  }
  render(){
   return (
    <div className="main">
      <h4>About</h4>
      <p>
        Hello! this is Hasna Marwa MALEK. An embedded systems engineering student, currently doing a double diploma at ESISAR- Grenoble INP.
        full resume <a  className="App-link"  href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > here </a>
      </p>
    </div>
   );
  }
}
