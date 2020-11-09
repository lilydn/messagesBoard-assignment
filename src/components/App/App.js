import React from 'react';
import styled from 'styled-components';
import './App.css';
import exampleMessageList from '../../utilities/pre-defined-messagesList';
import Content from './Content';

/* flex children: FormContainer & MessagesContainer */
const FlexWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 15px;
	box-shadow: 0px 0px 5px 3px #d6dadd;
	-webkit-box-shadow: 0px 0px 5px 3px #d6dadd;
	width: 50%;
	min-width: 300px;
	max-width: 720px;

	/* Laptops, Desktops */
	@media (min-width: 1025px) {
		height: 70%;
	}
	/* Small Laptops, Tablets */
	@media (max-width: 1024px) and (min-width: 481px) {
		height: 70%;
	}
	/* Mobile */
	@media (max-width: 480px) {
		width: inherit;
		height: 90%;
	}
	/* Mobile Landscape */
	@media (min-width: 481px) and (max-width: 867px) and (orientation: landscape) {
		width: inherit;
		flex-direction: row;
	}

`;

// to start with no messages: pass to Content an empty array as prop 
// to start with pre-defined array of messages: pass exampleMessageList
function App() {
	return (
		<div className='App'>
			<FlexWrapper>
				<Content predefinedList={ exampleMessageList }/>
			</FlexWrapper>
		</div>
	);
}

export default App;