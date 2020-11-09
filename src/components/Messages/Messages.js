import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterBar from './FilterBar';
import Message from './Message';

const Wrapper = styled.div`
	padding: 20px;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const InnerWrapper = styled.div`
	margin-top: 20px;
	max-height: 100%;
	overflow-y: scroll;
	overflow-x: hidden;
`;

const Messages = ({ messagesList }) => {
	const [filteredMessages, setFilteredMessages] = useState(null);
	const [term, setTerm] = useState('');

	useEffect(() => {
		setFilteredMessages([...messagesList]);
	}, [messagesList]);

	const renderMessages = () => {
		const filter = filteredMessages.filter(
			message =>
				message.email.toLowerCase().includes(term) ||
				message.message.toLowerCase().includes(term)
		);
		return filter.map((messageObj, index) => {
			return <Message key={index} messageObject={messageObj} />;
		});
	};

	return (
		<Wrapper>
			<FilterBar onInput={setTerm} term={term} />
			<InnerWrapper>{filteredMessages && renderMessages()}</InnerWrapper>
		</Wrapper>
	);
};

export default Messages;
