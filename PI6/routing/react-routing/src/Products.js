import React from 'react'
import { Link, Outlet} from 'react-router-dom'

const Products = () => {
  return (
		<>
			<br />
			<Link to="/products/tv">Tv</Link>
			<Link to="/products/radio">Radio</Link>
			<Link to="/products/speaker">Speaker</Link>
			<Outlet />
		</>
	);
}

export default Products