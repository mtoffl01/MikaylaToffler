import React from 'react';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Connect = (props) => {
  return(
    <div className="Section Icons">
      <a href="https://github.com/mtoffl01" rel="noopener noreferrer" target="_blank">
        <FaGithub size={50} className="connect-icons" color="#ffe6e6"/>
      </a>
      <a href="https://www.linkedin.com/in/mikayla-toffler/" rel="noopener noreferrer" target="_blank">
        <FaLinkedin size={50} className="connect-icons" color="#ffe6e6"/>
      </a>
      <a href="https://medium.com/@tofflerm" rel="noopener noreferrer" target="_blank">
        <FaMedium size={50} className="connect-icons" color="#ffe6e6"/>
      </a>
    </div>
  )
}

export default Connect;
