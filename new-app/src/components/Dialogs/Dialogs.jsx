import React 				from 'react';
import style 				from './Dialogs.module.css';
import DialogsList 	from './DialogsList/DialogsList.jsx';
import Line 				from './Line/Line.jsx';
import Message 			from './Message/Message.jsx';

const Dialogs = (props) => {
	return (
		<section className = {style.main_container}>
			<h3 className = "name_section">Dialogs</h3>
			<div className = {style.content}>
				<DialogsList />
				<Line />
				<div className={style.message_container}>
					<Message author = "Dima" message = "Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
					<Message author = "Dima" message = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est sunt corporis, voluptatibus quam animi facilis. Quod, eum, iusto, tempore hic exercitationem voluptates ab nemo officiis quos, ex modi atque voluptatum."/>
					<Message author = "Me" message = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, nemo saepe."/>
					<Message author = "Dima" message = "Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
					<Message author = "Me" message = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quibusdam, nesciunt nulla neque! Voluptatibus libero nihil, vitae porro quisquam. Laboriosam error, cupiditate repellat molestias at odio dolor esse doloremque debitis?"/>
					<Message author = "Dima" message = "Lorem ipsum dolor sit amet, consectetur adipisicing elit."/>
					<Message author = "Me" message = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum odio sunt quidem ratione, ut perferendis eveniet, necessitatibus asperiores, accusantium voluptatibus facere voluptate aliquam, non libero id. Tempore deleniti aliquid, reprehenderit!"/>
				</div>
			</div>
		</section>
	);
}

export default Dialogs;