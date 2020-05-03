import React from 'react';
import {tastemakers, tuftsSights, graceShopper} from '../images/'

const Projects = () => {
  return(
    <div className="Section Project">
      <div className="project-image-wrapper">
        <a href="https://github.com/tastemakers-node-feratu/capstone1">
          <img src={tastemakers} className="Project-img" alt="tastemakers" />
        </a>
        <p className="project-description">Tastemakers: mobile social media
        application. Share image-driven experiences with your friends.</p>
      </div>
      <div className="project-image-wrapper">
        <img src={graceShopper} className="Project-img" alt="grace shopper" />
        <p className="project-description">Lux Ducks: E-commerce site for purchasing Luxury Rubber Duckies.</p>
      </div>
      <div className="project-image-wrapper">
        <img src={tuftsSights} className="Project-img" alt="tufts sights" />
        <p className="project-description">Tufts Sights: Take a virtual tour of the Tufts University campus.</p>
      </div>
    </div>
  )
}

export default Projects;
