import React from 'react';

import './App.css';
import TaskList from './components/TaskList.js';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<TaskList></TaskList>
			</header>
		</div>
  	);
}

export default App;
