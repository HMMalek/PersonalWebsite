import React, { Component } from 'react'
import avatar from './avatar.png';
import './App.css';

export default class About extends Component {

 constructor(props, context) {
    super(props, context);
  }
  render(){
   return (
    <div className="main">
      <h4 id="title">About</h4>
      <table>
        <tr><img src={avatar} className="App-avatar" alt="avatar" /></tr>
        <tr>
          <p id="aboutDesc">
            Hello! this is Hasna Marwa MALEK. An embedded systems engineering student, currently doing a double diploma at ESISAR- Grenoble INP.
            Full resume <a  className="App-link"  href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > here </a>
          </p>
        </tr>
      </table>
    </div>

   );
  }
}
