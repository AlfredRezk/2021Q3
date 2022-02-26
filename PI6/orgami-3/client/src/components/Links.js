/** @format */

import React from "react";
import "../assets/workshop-styles.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

import { logout } from '../services'

const Links = () => {
  const navigate = useNavigate()
  const { setIsAuth, isAuth } = useContext(AuthContext);

  const logoutHandler = async() => {
    const res = await logout();
    console.log(res);
    setIsAuth(false); 
    navigate('/')
  }

let linksContent = (
  <>
     	<li className="listItem">
				<NavLink to="/register" className={ ({ isActive})=> isActive?'active':''}>Register</NavLink>
			</li>
			<li className="listItem">
				<NavLink to="/login" className={ ({ isActive})=> isActive?'active':''}>Login</NavLink>
			</li>
  </>
   
)

if (isAuth) {
  linksContent = (
    <>
      <li className="listItem">
        <NavLink to="/post" className={ ({ isActive})=> isActive?'active':''}>Post</NavLink>
			</li>
			<li className="listItem">
				<NavLink to="/profile"className={ ({ isActive})=> isActive?'active':''}>Profile</NavLink>
			</li>
			<li className="listItem">
        <button onClick={ logoutHandler } id="logoutBtn">logout</button>
			</li>
    </>
    
  )
}



	return (
		<>
      { linksContent}
		</>
	);
};

export default Links;
