import React from 'react';

const SingleProject = (props) => {
  return(
    <div className="project-image-wrapper">
      <a href={props.link} rel="noopener noreferrer" target="_blank">
        <img src={props.img} className="Project-img" alt={props.imgAlt} />
      </a>
      <p className="project-description">props.description</p>
  </div>
  )
}

export default SingleProject;
