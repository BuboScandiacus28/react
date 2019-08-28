import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
	return (
		<div className = {style.container}>
			<svg className = {style.circle}>
				<circle fill = "orange" r = "29" cx = "29" cy = "29" />
			</svg>
			<p className = {style.text}>{props.message}</p>
		</div>
	);
}

export default Post;

