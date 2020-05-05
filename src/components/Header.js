import React from 'react';
import { me } from '../images/';

const Header = (props) => {
  return (
    <div className="App-header">
      <img src={me} className="App-logo" alt="me" />
      <h1 className = "nameTitle">mikayla toffler</h1>
      <h3 className = "jobTitle">full stack software engineer</h3>
      <div className="links">
        <button onClick={props.displayAbout}>about</button>
        <button onClick={props.displayProjects}>projects</button>
        <button onClick={props.displayConnect}>connect</button>
      </div>
    </div>
  )
}

export default Header;
