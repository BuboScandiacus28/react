import React from 'react';
import style from  './Nav.module.css';
import {NavLink} from 'react-router-dom';

const Nav = () => {
	return (
		<nav className = {style.container}>
			<ul className = {style.list}>
				<li><NavLink to = "/profile" activeClassName = {style.active}>Profile</NavLink></li>
				<li><NavLink to = "/dialogs" activeClassName = {style.active}>Messages</NavLink></li>
				<li><NavLink to = "/news" activeClassName = {style.active}>News</NavLink></li>
				<li><NavLink to = "/music" activeClassName = {style.active}>Music</NavLink></li>
			</ul>
			<a href="#">Setting</a>
		</nav>
	);
	
}

export default Nav;

