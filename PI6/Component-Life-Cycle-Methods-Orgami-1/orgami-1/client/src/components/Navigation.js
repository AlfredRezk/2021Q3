import React from 'react'
import Link from './Link'
import whiteBird from '../assets/white-origami-bird.png'

import '../assets/workshop-styles.css'

const Navigation = () => {
  return (
		<nav className="Navigation">
			<ul>
				<li className="listItem">
					<a href="#">
						<img src={whiteBird} alt="White Orgami" />
					</a>
				</li>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, index) => (
					<Link num={num} key={index} />
				))}
			</ul>
		</nav>
	);
}

export default Navigation