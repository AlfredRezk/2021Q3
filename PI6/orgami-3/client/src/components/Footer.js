import React from 'react';
import '../assets/workshop-styles.css'
import Links from './Links'
import blueBird from '../assets/blue-origami-bird-flipped.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='Footer'>
      <ul>
        <Links/>
        <li className='listItem'>
          <Link to="#"><img src={ blueBird} alt="bird"/> </Link>
        </li>
      </ul>
      <p>Software University &copy; 2019</p>
    </footer>
  )
}

export default Footer