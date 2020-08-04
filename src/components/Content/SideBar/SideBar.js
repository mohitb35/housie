import React from 'react';
import History from '../History';
import Button from '../Button';

import './SideBar.css';

function generateRecentHistory(calledNumbers){
	return [
		calledNumbers[0] ? calledNumbers[0] : undefined,
		calledNumbers[1] ? calledNumbers[1] : undefined,
		calledNumbers[2] ? calledNumbers[2] : undefined
	];
}


const SideBar = (props) => {
	let { called, callNextNumber, resetBoard } = props;

	let callCount = called.length;

	let allNumbersCalled = called.length >= 90 ? true : false;

	return (
		<section className="side-bar">
			<History history={generateRecentHistory(called)} callCount={callCount} />
			<div className="buttons">
				<Button type="next-number" text="Next Number" action={callNextNumber} isDisabled={allNumbersCalled} />
				<Button type="reset-board" text="Reset Board" action={resetBoard}/>
				<Button type="complete-game" text="Complete Game" action={resetBoard}/>
			</div>
		</section>
	);
}

export default SideBar;
