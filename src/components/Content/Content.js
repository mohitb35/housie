import React from 'react';
import './Content.css';
import GameBoard from './GameBoard';
import SideBar from './SideBar';

class Content extends React.Component {
	initial = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
		11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
		21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 
		31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 
		41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 
		51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 
		61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 
		71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 
		81, 82, 83, 84, 85, 86, 87, 88, 89, 90
	];

	state = {
		called: [],
		pending: this.initial,
		lastCalled: undefined
	}

	callNextNumber = () => {
		const { called, pending } = this.state;

		let currentPendingCount = pending.length;
		
		let calledIndex = Math.floor(Math.random() * currentPendingCount);
		
		let calledNumber = pending[calledIndex];
		
		let updatedPending = pending.filter((item) => item !== calledNumber);
		let updatedCalled = [calledNumber, ...called];

		this.setState({
			called: updatedCalled,
			pending: updatedPending,
			lastCalled: calledNumber
		})
	}

	resetBoard = () => {
		this.setState({
			called: [],
			pending: this.initial,
			lastCalled: undefined
		})
	}

	render(){
		let { called, lastCalled } = this.state;
		return (
			<main>
				<GameBoard called={called} lastCalled={lastCalled}/>
				<SideBar resetBoard={this.resetBoard} callNextNumber={this.callNextNumber} called={called} />
			</main>
		);
	}
}

export default Content;
