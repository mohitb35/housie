import React from 'react';
import History from '../History';
import Button from '../Button';

import './SideBar.css';

const SideBar = () => {
	return (
		<section className="side-bar">
			<History />
			<div className="buttons">
				<Button text="Next Number"/>
				<Button text="Reset Board"/>
				<Button text="Complete Game"/>
			</div>
		</section>
	);
}

export default SideBar;
