import React from 'react';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const Connect = (props) => {
  return(
    <div className="Section Icons">
      <FaGithub size={50} className="connect-icons"/>
      <FaLinkedin size={50} className="connect-icons"/>
      <FaMedium size={50} className="connect-icons"/>
    </div>
  )
}

export default Connect;
