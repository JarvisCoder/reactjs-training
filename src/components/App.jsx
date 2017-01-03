import React from 'react';
import AppBar from 'material-ui/AppBar';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';

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
				<div style={{
					display: 'flex',
					flexFlow: 'row wrap',
					maxWidth: 1200,
					width: '100%',
					margin: '30px auto 30px'
				}}>
					<ChannelList />
					<MessageList />
				</div>
				<MessageBox />
			</div>
		);
	}

}

App.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default App;