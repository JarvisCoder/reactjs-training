import React from 'react';
import Channel from './Channel.jsx';

import Card from 'material-ui/Card';
import List from 'material-ui/List';

class ChannelList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			channels: [
				'Channel-1',
				'Channel-22',
				'Channel-333'
			]
		};
	}

	render() {
		var channelNodes = this.state.channels.map((channel)=>{
			return (
				<Channel key={channel.length} channelName={channel}/>
			);
		});

		return  (
			<Card style={{
				flexGrow: 1
			}}>
				<List>
					{channelNodes}
				</List>
			</Card>
		);
	}
}

export default ChannelList;