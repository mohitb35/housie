import React from 'react';
import JustGone from '../JustGone';
import CallCount from '../CallCount';

import './History.css';

const History = () => {
	return (
		<div className="history">
			<JustGone />
			<CallCount count="4"/>
		</div>
	)
};

export default History;