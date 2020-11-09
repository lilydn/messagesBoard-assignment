import React from 'react';
import styled from 'styled-components';
import './App.css';
import Content from './Content';

/* flex children: FormContainer & MessagesContainer */
const FlexWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 15px;
	box-shadow: 0px 0px 5px 3px #d6dadd;
	-webkit-box-shadow: 0px 0px 5px 3px #d6dadd;
	width: 50%;
	overflow: hidden;
	height: 70%;
	min-width: 300px;
	max-width: 720px;

	/* Mobile Portrait */
	@media (max-width: 481px) and (max-height: 767px) and (orientation: portrait) {
		height: 95%;
	}
	/* Mobile Landscape */
	@media (min-width: 481px) and (max-width: 824px) and (max-height: 767px) and (orientation: landscape) {
		width: inherit;
		height: 95%;
		flex-direction: row;
	}
`;

function App() {
	return (
		<div className='App'>
			<FlexWrapper>
				<Content />
			</FlexWrapper>
		</div>
	);
}

export default App;
