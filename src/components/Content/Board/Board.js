import React from 'react';
import './Board.css';

import Row from '../Row';

function generateRows(rowCount) {
	let rows = [];
	for (let i = 0; i < rowCount; i++){
		rows.push(<Row key={i} rowIndex={i}/>)
	}
	return rows;
}

const Board = () => {
	return (
		<div className="board">
			{generateRows(9)}
		</div>
	);
}

export default Board;
