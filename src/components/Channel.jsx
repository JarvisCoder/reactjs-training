import React from 'react';

import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

class Channel extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ListItem>
				{this.props.channelName}
			</ListItem>
		);
	}
}

export default Channel;