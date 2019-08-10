import React from 'react';

const Nav = () => {
	return (
		<nav className = "nav">
			<ul className = "nav__list">
				<li className = "nav__list-item"><a href="#">Profile</a></li>
				<li className = "nav__list-item"><a href="#">Messages</a></li>
				<li className = "nav__list-item"><a href="#">Main content</a></li>
			</ul>
			<a href="#">Setting</a>
		</nav>
		);
	
}

export default Nav;

