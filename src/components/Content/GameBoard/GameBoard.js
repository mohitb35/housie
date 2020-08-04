import React from 'react';
import './GameBoard.css';
import Board from '../Board';
import GameDetails from '../GameDetails';

const GameBoard = (props) => {
	let { lastCalled, called } = props;
	return (
		<section className="game-board">
			<GameDetails />
			<Board lastCalled={lastCalled} called={called}/>
		</section>
	);
}

export default GameBoard;
