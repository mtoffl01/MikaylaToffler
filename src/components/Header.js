import React from 'react';
import { me } from '../images/';

const Header = (props) => {
  return (
    <header className="App-header">
      <img src={me} className="App-logo" alt="me" />
      <h1 className = "nameTitle">Mikayla Toffler</h1>
      <h3 className = "jobTitle">Fullstack Software Engineer</h3>
      <div className="links">
        <button onClick={props.displayAbout}>about</button>
        <button onClick={props.displayProjects}>projects</button>
        <button onClick={props.displayConnect}>connect</button>
      </div>
    </header>
  )
}

export default Header;
