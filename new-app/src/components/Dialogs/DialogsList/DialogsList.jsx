import React from 'react';
import style from './DialogsList.module.css';
import DialogsItem 	from './DialogsItems/DialogsItems.jsx';

const DialogsList = (props) => {
	return (
		<div className = {style.list_container}>
			<ul className = {style.list}>
				<DialogsItem name = "Victor" href = "/Victor" />
				<DialogsItem name = "Dima" href = "/Dima" />
				<DialogsItem name = "Misha" href = "/Misha" />
				<DialogsItem name = "Dasha" href = "/Dasha" />
				<DialogsItem name = "Maks" href = "/Maks" />
				<DialogsItem name = "Pety" href = "/Pety" />
				<DialogsItem name = "Kirill" href = "/Kirill" />
				<DialogsItem name = "Alex" href = "/Alex" />
				<DialogsItem name = "Vlad" href = "/Vlad" />
			</ul>
		</div>
	);
}

export default DialogsList;