import React from 'react';
import styled from 'styled-components';
import './Message.css';

const MessageWrapper = styled.div`
  margin: 15px 30px 25px 5px;
`;


const Message = ({ messageObject }) => {
  const { email, message, avatar } = messageObject;
  
  console.log("avatar", avatar);
  return (
    <MessageWrapper>
      <div className="ui comments">
        <div className="comment">
          <span className="avatar">
            <img src={avatar} />
          </span>
          <div className="content">
            <span className="author">{email}</span>
            <div className="text">
              {message}
            </div>
          </div>
        </div>
      </div>
    </MessageWrapper>
  )
}

export default Message;
