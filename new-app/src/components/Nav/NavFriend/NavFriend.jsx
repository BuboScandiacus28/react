import React from 'react';
import style from  './NavFriend.module.css';
import {NavLink} from 'react-router-dom';

const NavFriend = (props) => {
	return (
		<NavLink className = {style.link} to = {"/profile/"+props.link}>
			<div className = {style.friend_img_container}>
				<img src = {props.img} alt = ""/>
			</div>
			<p className = {style.friend_text}>{props.name}</p>
		</NavLink>
	);
	
}

export default NavFriend;

