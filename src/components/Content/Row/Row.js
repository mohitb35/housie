import React from 'react';
import Square from '../Square';

import './Row.css';

function generateSquares(squareCount, rowIndex, called, lastCalled) {
	let squares = [];
	for (let i = 0; i < squareCount; i++){
		let key = rowIndex*10+i+1;
		let isCalled = false;
		let last = false;
		if (key === lastCalled) {
			last = true;
		}

		if(called.indexOf(key) !== -1){
			isCalled = true;
		}

		squares.push(<Square key={key} squareIndex={key} isCalled={isCalled} last={last}/>)
	}
	return squares;
}

const Row = (props) => {
	let { rowIndex, called, lastCalled } = props
	return (
		<div className="row">
			{generateSquares(10, rowIndex, called, lastCalled)}
		</div>
	);
}

export default Row;