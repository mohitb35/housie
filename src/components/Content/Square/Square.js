import React from 'react';
import './Square.css';

class Square extends React.Component {
	/* state = {
		isCalled: false,
		last: false
	}; */

	render(){
		let { isCalled, last } = this.props;
		let classes = `square ${isCalled ? "called" : ""} ${last ? "last" : ""}`

		return (
			<div className={classes}>
				{this.props.squareIndex}
			</div>
		);
	}
}

export default Square;