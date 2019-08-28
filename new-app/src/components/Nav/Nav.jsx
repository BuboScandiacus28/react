import React from 'react';
import style from  './Nav.module.css';

const Nav = () => {
	return (
		<nav className = {style.container}>
			<ul className = {style.list}>
				<li><a href="#">Profile</a></li>
				<li><a href="#">Messages</a></li>
				<li><a href="#">Main content</a></li>
			</ul>
			<a href="#">Setting</a>
		</nav>
	);
	
}

export default Nav;

