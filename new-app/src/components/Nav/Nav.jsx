import React from 'react';
import style from  './Nav.module.css';
import {NavLink} from 'react-router-dom';
import NavFriend from  './NavFriend/NavFriend.jsx';

const Nav = (props) => {
	
	let friendsElements = props.state.friends
		.map( f => <NavFriend img = {f.img} name = {f.name} link = {f.link} />);

	return (
		<nav className = {style.container}>
			<ul className = {style.list}>
				<li><NavLink to = "/profile" activeClassName = {style.active}>Profile</NavLink></li>
				<li><NavLink to = "/dialogs" activeClassName = {style.active}>Messages</NavLink></li>
				<li><NavLink to = "/news" activeClassName = {style.active}>News</NavLink></li>
				<li><NavLink to = "/music" activeClassName = {style.active}>Music</NavLink></li>
				<li>
					<div className="friend_container">
						<NavLink to = "/friend" activeClassName = {style.active}>Friend</NavLink>
						{friendsElements}
					</div>
				</li>
			</ul>
			<a href="#">Setting</a>
		</nav>
	);
	
}

export default Nav;

