import React from 'react';
import Post  from './Post/Post.jsx';
import style from './Posts.module.css';

const Posts = (props) => {
	
	/* let posts = [
		{
			message: "Hey, why nobody love my?",
			likeCount: "225"
		}, {
			message: "GG WP?",
			likeCount: "112"
		}, 
	];*/

	let postsElements = props.posts
		.map( p => <Post message = {p.message} likeCount = {p.likeCount} />);

	return (
			<div>
				<h1 className = {style.title}>My posts</h1>
				<form className = {style.form}>
					<textarea className = {style.form_input} cols="30" rows="5" placeholder = "your news..."></textarea>
					<button className = {style.form_send}>Send</button>
				</form>

				{postsElements}

			</div>
		);
}

export default Posts;

