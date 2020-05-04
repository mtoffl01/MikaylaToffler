import React from 'react';

const SingleProject = (props) => {
  const {link, img, imgAlt, description, title} = props.project;
  return(
    <div className="project-image-wrapper">
      <a href={link} rel="noopener noreferrer" target="_blank">
        <img src={img} className="Project-img" alt={imgAlt} />
      </a>
      <p className="project-description">{description}</p>
  </div>
  )
}

export default SingleProject;
