import React from 'react';
import './GameBoard.css';
import Board from '../Board';
import GameDetails from '../GameDetails';

const GameBoard = () => {
	return (
		<section class="game-board">
			<GameDetails />
			<Board />
		</section>
	);
}

export default GameBoard;
