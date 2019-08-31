import React from 'react';
import style from './DialogsItems.module.css';
import {NavLink} from 'react-router-dom';

const DialogsItems = (props) => {
	let path = "/dialogs/" + props.id;
	
	return (
		<li className={style.list_item}>
			<div className={style.title_container}>
				<svg className={style.dots}>
					<circle fill="orange" r="5" cx="5" cy="5" />
				</svg>
				<NavLink to = {path} activeClassName = {style.active} className={style.title}>{props.name}</NavLink> 
			</div>
		</li>
	);
}

export default DialogsItems;