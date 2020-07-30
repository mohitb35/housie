import React from 'react';
import './Content.css';
import GameBoard from './GameBoard';
import SideBar from './SideBar';

const Content = () => {
	return (
		<main>
			<GameBoard />
			<SideBar />
		</main>
	);
}

export default Content;
