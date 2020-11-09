import React from 'react';
import fetchAvatarURL from '../../faces-api/uifaces';
import utils from '../../utilities/util-functions';
import FormContainer from '../Form/FormContainer';
import MessagesContainer from '../Messages/MessagesContainer';
import Form from '../Form/Form';
import Messages from '../Messages/Messages';


class Content extends React.Component {
	state = { messagesList: null, avatarLoading: false };

	componentDidMount = () => {
		const storageData = utils().loadFromLocalStorage();
		this.setState({ messagesList: storageData });
	};

	componentDidUpdate = () => {
		const { messagesList } = this.state;
		utils().writeToLocalStorage(messagesList);
	};

	onFormSubmit = async (email, message) => {
		const { messagesList } = this.state;
		let avatar = null;
		const user = utils().userExists(email, messagesList);
		// if a message from the same email exists,
		// use the existing avatar
		if (user) {
			avatar = user.avatar;
		} else {
			// else fetch a new random avatar
			this.setState({ avatarLoading: true });
			avatar = await fetchAvatarURL();
		}
		const newMessage = {
			email,
			message,
			avatar,
		};
		const updatedList = [...messagesList, newMessage];
		this.setState({ messagesList: updatedList, avatarLoading: false });
  };

	render() {
		const { messagesList, avatarLoading } = this.state;

		return (
			<React.Fragment>
				<FormContainer>
					<Form handleSubmit={this.onFormSubmit} isLoading={avatarLoading} />
				</FormContainer>

				<MessagesContainer>
					{messagesList && <Messages messagesList={messagesList}/>}
				</MessagesContainer>
			</React.Fragment>
		);
	}
}

export default Content;