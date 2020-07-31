import React from 'react';

import './JustGone.css'
import PreviousNumber from '../PreviousNumber';
import LastNumber from '../LastNumber';

const JustGone = () => {
	return (
		<div className="just-gone">
			<h4>Just Gone</h4>
			<div className="numbers">
				<LastNumber value="23"/>
				<PreviousNumber value="45"/>
				<PreviousNumber value="32"/>
			</div>
		</div>
	)
};

export default JustGone;