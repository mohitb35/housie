import React from 'react';

import './LastNumber.css'

const LastNumber = (props) => {
	return (
		<div className="last-number number">
			{props.value}
		</div>
	)
};

export default LastNumber;