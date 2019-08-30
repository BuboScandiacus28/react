import React from 'react';
import style from './DialogsItems.module.css';

const DialogsItems = (props) => {
	return (
		<li className={style.list_item}>
			<a href={"/dialogs" + props.href}>
				<div className={style.title_container}>
					<svg className={style.dots}>
						<circle fill="orange" r="5" cx="5" cy="5" />
					</svg>
					<p className={style.title}>{props.name}</p>
				</div>
			</a>
		</li>
	);
}

export default DialogsItems;