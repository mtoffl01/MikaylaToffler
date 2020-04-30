import React from 'react';
import { Link } from 'react-router-dom'

const Linker = (props) => {
  return(
    <div>
      <Link to={`/${props.pageName}`}>{props.pageName}</Link>
    </div>
  )
}

export default Linker;
