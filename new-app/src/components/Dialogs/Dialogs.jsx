import React 				from 'react';
import style 				from './Dialogs.module.css';
import Line 				from './Line/Line.jsx';
import Message 			from './Message/Message.jsx';
import DialogsItem 	from './DialogsItems/DialogsItems.jsx';

const Dialogs = (props) => {

	let dialogsElements = props.state.dialogs
		.map( d => <DialogsItem name = {d.name} id = {d.id} />);

	let messageElements = props.state.messages
		.map( m => <Message author = {m.author} message = {m.message} />);

	return (
		<section className = {style.main_container}>
			<h3 className = {style.name_section}>Dialogs</h3>
			<div className = {style.content}>
				<div className = {style.list_container}>
					<ul className = {style.list}>
						{dialogsElements}
					</ul>
				</div>
				<Line />
				<div className={style.message_container}>
					{messageElements}
				</div>
			</div>
		</section>
	);
}

export default Dialogs;