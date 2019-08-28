import React from 'react';
import Post  from './Post/Post.jsx';
import style from './Posts.module.css';

const Profile = () => {
	return (
			<div>
				
				<h1 className = {style.title}>My posts</h1>
				<form className = {style.form}>
					<textarea className = {style.form_input} cols="30" rows="5" placeholder = "your news..."></textarea>
					<button className = {style.form_send}>Send</button>
				</form>

				<Post />
				<Post />

			</div>
		);
}

export default Profile;

