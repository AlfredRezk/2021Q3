import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const activeLink = ({ isActive}) => {
    return {
      color: isActive? 'red': 'inherit'
    }
  }

  return (
		<>
      <NavLink style={ activeLink}  to="/home">Home</NavLink>
      <NavLink style={ activeLink} to="/about">About</NavLink>
      <NavLink className={ ({ isActive}) => isActive? 'active': ''} to="/products">Products</NavLink>
		</>
	);
}

export default Navbar