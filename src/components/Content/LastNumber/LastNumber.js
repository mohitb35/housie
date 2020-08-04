import React from 'react';

import './LastNumber.css'

const LastNumber = (props) => {
	if(props.value){
		return (
			<div className="last-number number">
				{props.value}
			</div>
		)
	}
	return null;
};

export default LastNumber;