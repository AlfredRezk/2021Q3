import React from 'react'
import Links from './Links'
import whiteBird from '../assets/white-origami-bird.png'
import { Link } from 'react-router-dom';

import '../assets/workshop-styles.css'

const Navigation = () => {
  return (
		<nav className="Navigation">
			<ul>
				<li className="listItem">
					<Link to="#">
						<img src={whiteBird} alt="White Orgami" />
					</Link>
				</li>
			  <Links/>
			</ul>
		</nav>
	);
}

export default Navigation