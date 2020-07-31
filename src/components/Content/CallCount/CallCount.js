import React from 'react';
import './CallCount.css';


const CallCount = (props) => {
	return (
		<div className="call-count">
			{props.count} numbers called.
		</div>
	)
};

export default CallCount;