
import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div {...props} className={ `Card ${props.className}` } >{ props.children}</div>
  )
}

export default Card