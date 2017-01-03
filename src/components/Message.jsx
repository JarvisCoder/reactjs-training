import React from 'react';

import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

class Message extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ListItem
				leftAvatar={
					<Avatar src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAVrAAAAJGRiNTI0ODFmLTcyZjEtNGUxNS1hMzZmLTQ4NmViMjNiYjMyZA.jpg" />
				}
			>
				{this.props.chatMsg}
			</ListItem>
		);
	}
}

export default Message;