import React from 'react';
import './CallCount.css';


const CallCount = (props) => {
	return (
		<div className="call-count">
			{props.count} {props.count===1 ? "number" : "numbers"} called.
		</div>
	)
};

export default CallCount;