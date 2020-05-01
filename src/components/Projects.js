import React from 'react';
import {tastemakers, tuftsSights, graceShopper} from '../images/'

const Projects = () => {
  return(
    <div className="Section Project">
      <div className="project-image-wrapper">
        <img src={tastemakers} className="Project-img" alt="tastemakers" />
        {/* <p className="project-description">Tastemakers is a mobile social media app for sharing experiences with friends. As a fullstack developer on this group project, I worked across the React-Native/Redux/Express/Node.js/MySQL stack with a particular focus on building out functionality for the user profile, creating a new post, and utilizing machine technology for the explore page. I also optimized the API routes by implementing database model methods.</p> */}
      </div>
      <div className="project-image-wrapper">
        <img src={tuftsSights} className="Project-img" alt="tufts sights" />
        <p className="project-description"></p>
      </div>
      <div className="project-image-wrapper">
        <img src={graceShopper} className="Project-img" alt="grace shopper" />
        <p className="project-description"></p>
      </div>
    </div>
  )
}

export default Projects;
