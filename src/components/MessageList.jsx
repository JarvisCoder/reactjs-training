import React from 'react';
import Message from './Message.jsx';

import Card from 'material-ui/Card';
import List from 'material-ui/List';

class MessageList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			messages: [
				'Chat1: Hi there! How are you ?',
				'Chat2: I am fine, and you ?',
				'Chat3: Awesome ;)'
			]
		};
	}

	render() {
		var messageNodes = this.state.messages.map((message)=>{
			return (
				<Message key={message.length} chatMsg={message}/>
			);
		});

		return  (
			<Card style={{
				flexGrow: 2,
				marginLeft: 30
			}}>
				<List>
					{messageNodes}
				</List>
			</Card>
		);
	}
}

export default MessageList;