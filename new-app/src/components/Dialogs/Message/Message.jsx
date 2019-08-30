import React from 'react';
import style from './Message.module.css';

const Message = (props) => {
	return (
		<div className={style.message_container_wrapper}>
			<a className={style.message_author_container} href = "#">
				<img className={style.author_icon} src="smile.svg" alt=""/>
				<p className={style.author_name}>{props.author}</p>
			</a>
			<div className={style.message_text_container}>
				<p className={style.message_text}>{props.message}</p>
			</div>
		</div>
	);	
}

export default Message;