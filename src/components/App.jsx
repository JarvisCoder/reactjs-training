import React from 'react';
import AppBar from 'material-ui/AppBar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MessageList from './MessageList.jsx';


class App extends React.Component {
	
	constructor() {
		super();
	}

	getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }

	render() {
		return  (
			<div>
				<AppBar title="Chat Application"/>
				<MessageList />
			</div>
			
		);
	}

}

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default App;