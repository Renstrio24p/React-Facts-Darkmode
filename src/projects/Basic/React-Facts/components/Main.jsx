import React from 'react';

import { Join } from '../../../../assets/util/JoinClasses';

export default function Main(props) {
	return (
		<main className={props.darkmode ? 'dark' : ''}>
			<div className="overlay">
				<div className={Join(['container', props.darkmode ? 'dark' : ''])}>
					<h1>Fun facts about React</h1>
					<ul className="facts">
						<li>Was first released in 2013</li>
						<li>Was originally created by Jordan Walke</li>
						<li>Has well over 100K stars on GitHub</li>
						<li>Is maintained by Facebook</li>
						<li>Powers thousands of enterprise apps, including mobile apps</li>
					</ul>
				</div>
			</div>
		</main>
	);
}
