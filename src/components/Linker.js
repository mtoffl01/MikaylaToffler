import React from 'react';
import { Link } from 'react-router-dom'

const Linker = () => {
  return(
    <div>
      <Link to="/about">about</Link>
      <Link to="/projects">projects</Link>
      <Link to="/connect">connect</Link>
    </div>
  )
}

export default Linker;
