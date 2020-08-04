import React from 'react';

import './PreviousNumber.css'

const PreviousNumber = (props) => {
	if(props.value){
		return (
			<div className="previous-number number">
				{props.value}
			</div>
		)
	}
	return null;
};

export default PreviousNumber;