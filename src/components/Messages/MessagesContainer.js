import styled from 'styled-components';

const MessagesContainer = styled.div`
  background-color: #f6f6f6;
  flex: 1;
  overflow: auto;

	/* Mobile Landscape */
  @media (min-width: 481px) and (max-width: 867px) and (orientation: landscape) {
    width: 60vw;
  }
`;

export default MessagesContainer;