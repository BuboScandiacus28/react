import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className = "app__wrapper">
			<header className = "header">
				<img src="logo.svg" alt=""/>
			</header>
			<nav className = "nav">
				<ul className = "nav__list">
					<li className = "nav__list-item"><a href="#">Profile</a></li>
					<li className = "nav__list-item"><a href="#">Messages</a></li>
					<li className = "nav__list-item"><a href="#">Main content</a></li>
				</ul>
				<a href="#">Setting</a>
			</nav>
			<section className = "content">
				<div className = "content__main-img-container">
					<img className = "content__main-img" src="https://cdn.stocksnap.io/img-thumbs/960w/WMH53WWA3J.jpg" alt=""/>
				</div>
				<div className = "content__profile-img-container">
					<img className = "content__profile-img" src="https://cdn.stocksnap.io/img-thumbs/960w/QO8V4WRO3T.jpg" alt=""/>
				</div>
				<div className = "content__user-info">

				</div>
			</section>
		</div>
	);
}

export default App;
