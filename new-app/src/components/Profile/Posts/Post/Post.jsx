import React from 'react';
import style from './Post.module.css';

const Profile = () => {
	return (
		<div className = {style.container}>
			<svg className = {style.circle}>
				<circle fill = "orange" r = "29" cx = "29" cy = "29" />
			</svg>
			<p className = {style.text}>Hey, why nobody love my?</p>
		</div>
	);
}

export default Profile;

