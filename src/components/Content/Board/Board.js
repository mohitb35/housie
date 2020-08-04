import React from 'react';
import './Board.css';

import Row from '../Row';

function generateRows(rowCount, lastCalled, called) {
	let rows = [];
	for (let i = 0; i < rowCount; i++){
		rows.push(<Row key={i} rowIndex={i} lastCalled={lastCalled} called={called}/>)
	}
	return rows;
}

const Board = (props) => {
	let { lastCalled, called } = props;
	return (
		<div className="board">
			{generateRows(9, lastCalled, called)}
		</div>
	);
}

export default Board;
