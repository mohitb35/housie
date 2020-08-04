import React from 'react';

import './JustGone.css'
import PreviousNumber from '../PreviousNumber';
import LastNumber from '../LastNumber';

const JustGone = (props) => {
	if(props.history[0]){
		return (
			<div className="just-gone">
				<h4>Just Gone</h4>
				<div className="numbers">
					<LastNumber value={props.history[0]}/>
					<PreviousNumber value={props.history[1]}/>
					<PreviousNumber value={props.history[2]}/>
				</div>
			</div>
		)
	}
	return null;
};

export default JustGone;