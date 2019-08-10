import React from 'react';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Profile from './components/Profile.jsx';
import './App.css';

function App() {
	return (
		<div className = "app__wrapper">
			<Header />
			<Nav />
			<Profile />
		</div>
	);
}

export default App;
