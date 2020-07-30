import React from 'react';
import './GameBoard.css';
import Board from '../Board';
import GameDetails from '../GameDetails';

const GameBoard = () => {
	return (
		<section className="game-board">
			<GameDetails />
			<Board />
		</section>
	);
}

export default GameBoard;
