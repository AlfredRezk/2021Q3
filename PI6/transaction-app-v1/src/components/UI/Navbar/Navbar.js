import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <div className="container">
        <a href="#"> <h3>{ props.title}</h3></a>
      </div>
    </nav>
  );
};

export default Navbar;
