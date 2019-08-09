import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<Body />
		</div>
	);
}

function Header() {
	return (
		<div className="Header">
			<ul>
				<li>Home</li>
				<li>Work</li>
				<li>Setting</li>
			</ul>
		</div>
	);
}

function Body() {
	return (
		<div className="Body">
			<p>Simple HTML</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi esse, non vero, quasi pariatur dolor hic aperiam sit vel, ex nesciunt voluptates ipsa porro unde. Laboriosam at vitae cupiditate, ullam.</p>
		</div>
	);
}

export default App;
