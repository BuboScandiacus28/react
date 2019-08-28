import React 									from 'react';
import Header 								from './components/Header/Header.jsx';
import Nav 										from './components/Nav/Nav.jsx';
import Profile 								from './components/Profile/Profile.jsx';
import Dialogs 								from './components/Dialogs/Dialogs.jsx';
import Music 									from './components/Music/Music.jsx';
import News 									from './components/News/News.jsx';
import style 									from './App.module.css';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className = {style.wrapper}>
				<Header />
				<Nav />
				<main className = {style.main_container}>
					<Route path="/dialogs" component = {Dialogs} />
					<Route path="/profile" component = {Profile} />
					<Route path="/news" component = {News} />
					<Route path="/music" component = {Music} />
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
