/** @format */

import React from "react";
import "../assets/workshop-styles.css";
import { NavLink } from "react-router-dom";

const Links = () => {
	return (
		<>
			<li className="listItem">
        <NavLink to="/post" className={ ({ isActive})=> isActive?'active':''}>Post</NavLink>
			</li>
			<li className="listItem">
				<NavLink to="/register" className={ ({ isActive})=> isActive?'active':''}>Register</NavLink>
			</li>
			<li className="listItem">
				<NavLink to="/login" className={ ({ isActive})=> isActive?'active':''}>Login</NavLink>
			</li>
			<li className="listItem">
				<NavLink to="/profile"className={ ({ isActive})=> isActive?'active':''}>Profile</NavLink>
			</li>
      { [1, 2, 3, 4, 5, 6, 7].map((item, i) => (
        <li className="listItem" key={ i}>
					<a href="#">#######</a>
				</li>
			))}
		</>
	);
};

export default Links;
