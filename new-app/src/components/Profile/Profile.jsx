import React from 'react';
import Posts from './Posts/Posts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import style from './Profile.module.css';

const Profile = (props) => {

	return (
		<section className = {style.container}>
			
			<ProfileInfo />
			
			<Posts posts = {props.state.posts}/>
		
		</section>
		);
}

export default Profile;

