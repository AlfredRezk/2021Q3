import React from 'react';
import '../assets/workshop-styles.css'
import Link from './Link'
import blueBird from '../assets/blue-origami-bird-flipped.png';

const Footer = () => {
  return (
    <footer className='Footer'>
      <ul>
        { [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, i) => <Link num={ num } key={ i } />) }
        <li className='listItem'>
          <a href="#"><img src={ blueBird} /> </a>
        </li>
      </ul>

      <p>Software University &copy; 2019</p>
    </footer>
  )
}

export default Footer