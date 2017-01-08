import React from 'react';
import Message from './Message.jsx';

import Card from 'material-ui/Card';
import List from 'material-ui/List';
import * as firebase from 'firebase';
import _ from 'lodash';

class MessageList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			messages: []
		};
	}
	componentDidMount() {
		const config = {
			apiKey: "AIzaSyBBx-AbX7GDz2M6ulQ51epv-NGFQVhRyqU",
			authDomain: "lifetripz-services.firebaseapp.com",
			databaseURL: "https://lifetripz-services.firebaseio.com",
			storageBucket: "lifetripz-services.appspot.com",
			messagingSenderId: "616745753888"
		};
		firebase.initializeApp(config);
		const rootRef = firebase.database().ref();
		const messagesRef = rootRef.child('messages');
		messagesRef.once('value')
			.then((snapshot) => {
				var messagesVal = snapshot.val();
				var messages = _(messagesVal)
					.keys()
					.map((messageKey)=>{
							var clone = _.clone(messagesVal[messageKey]);
							clone.key = messageKey;
							return clone;
					})
					.value();
				this.setState({
					messages: messages
				});
			}
		);
	}

	render() {
		console.log(this.state.messages);
		var messageNodes = this.state.messages.map((message)=>{
			return (
				<Message key={message.key} chatMsg={message.message}/>
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