import React from 'react';
import style from  './Nav.module.css';

const Nav = () => {
	return (
		<nav className = {style.container}>
			<ul className = {style.list}>
				<li><a href="/profile">Profile</a></li>
				<li><a href="/dialogs">Messages</a></li>
				<li><a href="/news">News</a></li>
				<li><a href="/music">Music</a></li>
			</ul>
			<a href="#">Setting</a>
		</nav>
	);
	
}

export default Nav;

