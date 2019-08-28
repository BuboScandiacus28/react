import React from 'react';
import style from './Header.module.css';

const Header = () => {
	return (
		<header className = {style.header}>
			<img src="../logo.svg" alt=""/>
		</header>
	);
	
}

export default Header;