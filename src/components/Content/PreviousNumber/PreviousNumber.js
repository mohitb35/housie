import React from 'react';

import './PreviousNumber.css'

const PreviousNumber = (props) => {
	return (
		<div className="previous-number number">
			{props.value}
		</div>
	)
};

export default PreviousNumber;