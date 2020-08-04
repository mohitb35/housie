import React from 'react';
import JustGone from '../JustGone';
import CallCount from '../CallCount';

import './History.css';

const History = (props) => {
	return (
		<div className="history">
			<JustGone history={props.history} />
			<CallCount count={props.callCount}/>
		</div>
	)
};

export default History;