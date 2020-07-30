import React from 'react';
import Square from '../Square';

import './Row.css';

function generateSquares(squareCount, rowIndex) {
	let squares = [];
	for (let i = 0; i < squareCount; i++){
		squares.push(<Square key={rowIndex*10+i+1} squareIndex={rowIndex*10+i+1}/>)
	}
	return squares;
}

const Row = (props) => {
	return (
		<div className="row">
			{generateSquares(10, props.rowIndex)}
		</div>
	);
}

export default Row;