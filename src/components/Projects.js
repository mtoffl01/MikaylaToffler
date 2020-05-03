import React from 'react';
import {tastemakers, tuftsSights, graceShopper} from '../images/'

const Projects = () => {
  return(
    <div className="Section Project">
      <div className="project-image-wrapper">
        <a href="https://github.com/tastemakers-node-feratu/capstone1" rel="noopener noreferrer" target="_blank">
          <img src={tastemakers} className="Project-img" alt="tastemakers" />
        </a>
        <p className="project-description">Tastemakers: mobile social media
        application. Share image-driven experiences with your friends. As a fullstack developer on this group project, I worked across the stack with a particular focus on building out functionality for the user profile, creating a new post and the explore page. My team used the Node.js Sentiment machine learning model in order to detect positive engagement with particular posts and preferentially render similar content on the user's explore page.</p>
      </div>
      <div className="project-image-wrapper">
        <a href="https://grace-shopper-great-gatsby.herokuapp.com/" rel="noopener noreferrer" target="_blank">
          <img src={graceShopper} className="Project-img" alt="grace shopper" />
        </a>
        <p className="project-description">Lux Ducks: E-commerce site for purchasing Luxury Rubber Duckies.</p>
      </div>
      <div className="project-image-wrapper">
        <a href="https://github.com/tuftsdev/comp20-s2019-team7" rel="noopener noreferrer" target="_blank">
          <img src={tuftsSights} className="Project-img" alt="tufts sights" />
        </a>
        <p className="project-description">Tufts Sights: Take a virtual tour of the Tufts University campus.</p>
      </div>
    </div>
  )
}

export default Projects;
