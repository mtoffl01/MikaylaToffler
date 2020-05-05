import React from 'react';
import {tastemakers, tuftsSights, graceShopper} from '../images/'
import { FaAngleDoubleRight } from 'react-icons/fa';

const Projects = () => {
  return(
    <div className="Section Project">
      <div className="project-image-wrapper" data-aos="fade-up">
        <a href="https://github.com/tastemakers-node-feratu/capstone1" rel="noopener noreferrer" target="_blank">
          <img src={tastemakers} className="Project-img" alt="tastemakers" />
        </a>
        <div>
          <h2>TasteMakers</h2>
          <p className="project-description">TasteMakers is a mobile social media
            application for sharing image-driven experiences with your friends. As a full stack developer on this group project, I worked across the stack with a particular focus on the user profile, uploading posts, and the explore page. My team used the Node.js Sentiment machine learning model in order to detect positive engagement with particular posts and preferentially render similar content on the user's explore page.
          </p>
          <a href="https://www.youtube.com/watch?v=Jh6wxaCV14Q&list=PLx0iOsdUOUmk6YoAw7y5AbHeXf45tuNnF&index=15" rel="noopener noreferrer" target="_blank">
            <FaAngleDoubleRight size={50} className="viewBtn" color="#ffe6e6"/>
          </a>
        </div>
      </div>
      <div className="project-image-wrapper" data-aos="fade-up">
        <a href="https://grace-shopper-great-gatsby.herokuapp.com/" rel="noopener noreferrer" target="_blank">
          <img src={graceShopper} className="Project-img" alt="grace shopper" />
        </a>
        <div>
          <h2>Lux Ducks</h2>
          <p className="project-description">Lux Ducks is an E-Commerce site for purchasing fancy rubber ducks. As a full stack developer on this project, I worked across the React/Redux/Express/Node.js/SQL stack with a focus on the cart functionality. I also lead the team on schema design.
          </p>
          <a href="https://grace-shopper-great-gatsby.herokuapp.com/" rel="noopener noreferrer" target="_blank">
            <FaAngleDoubleRight size={50} className="viewBtn" color="#ffe6e6"/>
          </a>
        </div>
      </div>
      <div className="project-image-wrapper" data-aos="fade-up">
        <a href="https://github.com/tuftsdev/comp20-s2019-team7" rel="noopener noreferrer" target="_blank">
          <img src={tuftsSights} className="Project-img" alt="tufts sights" />
        </a>
        <div>
          <h2>Tufts Sights</h2>
          <p className="project-description">Tufts Sights allows users to take a virtual tour of Tufts campus in one of seven different languages. For the on-campus user, the application will automatically update its geolocation as the user walks around. For the offsite user, one can freely click on the pins to learn more about campus landmarks. My team used HTML/CSS/Javascript/Express/Node.js/MongoDB alongside Google Maps API to build this application.</p>
          <a href="https://github.com/tuftsdev/comp20-s2019-team7" rel="noopener noreferrer" target="_blank">
            <FaAngleDoubleRight size={50} className="viewBtn" color="#ffe6e6"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects;
