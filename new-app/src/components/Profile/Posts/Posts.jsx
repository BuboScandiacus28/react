import React from 'react';
import Post  from './Post/Post.jsx';
import style from './Posts.module.css';

const Posts = () => {
	return (
			<div>
				
				<h1 className = {style.title}>My posts</h1>
				<form className = {style.form}>
					<textarea className = {style.form_input} cols="30" rows="5" placeholder = "your news..."></textarea>
					<button className = {style.form_send}>Send</button>
				</form>

				<Post message = 'Hey, why nobody love my?' />
				<Post message = 'GG WP?' />

			</div>
		);
}

export default Posts;

