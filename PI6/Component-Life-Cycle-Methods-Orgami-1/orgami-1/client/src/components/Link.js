import React from 'react';
import '../assets/workshop-styles.css'

const Link = (props) => {
  return (
    <li className='listItem'> <a href="#">Going to { props.num}</a> </li>
  )
}

export default Link