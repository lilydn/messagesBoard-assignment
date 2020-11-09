import React from 'react';
import fetchAvatarURL from '../../faces-api/uifaces';
import FormContainer from '../Form/FormContainer';
import MessagesContainer from '../Messages/MessagesContainer';
import Form from '../Form/Form';
import Messages from '../Messages/Messages';

class Content extends React.Component {
  state = { messagesList: [], avatarLoading: false };
  
  componentDidMount = () => {
    const { predefinedList } = this.props;
    predefinedList
    ? this.setState({ messagesList: predefinedList })
    : this.setState({ messagesList: [] });
  }

	onFormSubmit = async (email, message) => {
    let avatar = null;
    const { messagesList } = this.state;
    const userExists = messagesList.find(message => message.email === email);

    // if message from the same email exists,
    // use it's existing avatar
    if(userExists) {
      avatar = userExists.avatar;
    } else {  // else fetch a new random avatar
      this.setState({ avatarLoading: true });
      avatar = await fetchAvatarURL();
    } 

		
		const newMessage = {
			email,
			message,
			avatar,
    };
    
    const updatedList = messagesList;
    updatedList.push(newMessage);
    console.log(updatedList);
    this.setState({ messagesList: updatedList, avatarLoading: false });
	};

	render() {
		const { messagesList, avatarLoading } = this.state;

		return (
			<React.Fragment>
				<FormContainer>
					<Form onSubmit={this.onFormSubmit} isLoading={avatarLoading} />
				</FormContainer>

				<MessagesContainer>
					<Messages messagesList={messagesList} />
				</MessagesContainer>
			</React.Fragment>
		);
	}
}

export default Content;