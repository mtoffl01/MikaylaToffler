import React from 'react';
import me from '../images/me.jpg';
import '../App.css';
import Linker from './Linker.js'

const HomePage = () => {
  return(
    <div>
      <header className="App-header">
        <img src={me} className="App-logo" alt="me" />
        <h1 className = "nameTitle">Mikayla Toffler</h1>
        <h3 className = "jobTitle">Fullstack Software Engineer</h3>
        <div className="links">
          <Linker pageName="about"/>
          <Linker pageName="projects"/>
          <Linker pageName="connect"/>
        </div>
      </header>
    </div>
  )
}

export default HomePage;
