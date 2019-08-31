import React 									from 'react';
import Header 								from './components/Header/Header.jsx';
import Nav 										from './components/Nav/Nav.jsx';
import Profile 								from './components/Profile/Profile.jsx';
import Dialogs 								from './components/Dialogs/Dialogs.jsx';
import Music 									from './components/Music/Music.jsx';
import News 									from './components/News/News.jsx';
import style 									from './App.module.css';
import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {
	return (
		<BrowserRouter>
			<div className = {style.wrapper}>
				<Header />
				<Nav state = {props.state.navPage} />
				<main className = {style.main_container}>
					<Route path="/dialogs" render = {() => <Dialogs state = {props.state.dialogsPage} />} />
					<Route path="/profile" render = {() => <Profile state = {props.state.profilePage} />} />
					<Route path="/news" render = {() => <News />} />
					<Route path="/music" render = {() => <Music />} />
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
