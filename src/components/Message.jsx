import React from 'react';

class Message extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>{this.props.chatMsg}</div>
		);
	}
}

export default Message;