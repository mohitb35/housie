import React from 'react';

import './Button.css';

const Button = (props) => {
	return (
		<div id={props.type} className="button" onClick={props.action}>
			<button disabled={props.isDisabled}>{props.text}</button>
		</div>
	);
}

export default Button;