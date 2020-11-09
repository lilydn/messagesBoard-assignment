import React, { useState , useEffect }  from 'react';
import styled from 'styled-components';
import FilterBar from './FilterBar';
import Message from './Message';

const Wrapper = styled.div`
	padding: 20px;
	max-height: 320px;
`;

const InnerWrapper = styled.div`
	margin: 10px 0;
	max-height: inherit;
	overflow-y: auto;
`;

// class Messages extends React.Component {
//   state = { filterTerm: '' };

//   render () {
//     return (
//       <Wrapper>
//         <FilterBar />
//         <InnerWrapper>
//           <Message />
//           <Message />
//           <Message />
//         </InnerWrapper>
//       </Wrapper>
//     );
//   }
// }

const Messages = ({ messagesList }) => {
	
  const [messagesToRender, setMessagesToRender] = useState(null);

  useEffect(() => {
    setMessagesToRender(messagesList);
	},[]);
	console.log(messagesToRender)

  const renderMessages = () => {
		return messagesToRender && messagesToRender.map((messageObj, index) => {
			console.log(messageObj)
			return(
			<Message key={index} messageObject={messageObj} />
		)});
	};

  const filterByTerm = (term) => {
    const updatedList = messagesToRender.filter(
      (messageObj) =>
        messageObj.email.toLowerCase().includes(term) ||
        messageObj.message.toLowerCase().includes(term)
    );
    setMessagesToRender(updatedList);
    renderMessages();
	}
	const filteredContent = () => {
		
	}

	return (
		<Wrapper>
			<FilterBar onInput={filterByTerm} />
			<InnerWrapper>
        {renderMessages()}
			</InnerWrapper>
		</Wrapper>
	);
};

export default Messages;
