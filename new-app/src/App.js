import React 		from 'react';
import Header 	from './components/Header/Header.jsx';
import Nav 			from './components/Nav/Nav.jsx';
import Profile 	from './components/Profile/Profile.jsx';
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
