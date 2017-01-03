import React from 'react';
import Message from './Message.jsx';

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
				<Message chatMsg={message}/>
			);
		});

		return  (
			<div>{messageNodes}</div>
		);
	}
}

export default MessageList;