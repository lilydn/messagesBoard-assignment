import React from 'react';
import styled from 'styled-components';
import utils from '../../utilities/util-functions';
import ValidationLabel from './ValidationLabel';
import './Form.css';

const Wrapper = styled.div`
	padding: 20px;
`;

class Form extends React.Component {
	state = { email: '', message: '', isValidEmail: true };

	onFormSubmit = () => {
		const { email, message, isValidEmail } = this.state;
		if (isValidEmail && email && message) {
			this.props.handleSubmit(email, message);
		}
	};

	validateEmail = () => {
		const { email } = this.state;
		const valid = utils().validateEmail(email);
		valid
			? this.setState({ isValidEmail: true })
			: this.setState({ isValidEmail: false });
	};

	////////////////////

	renderSubmitButton = () => {
		const { email, message, isValidEmail } = this.state;
		let disableBtn = !(email && message && isValidEmail);

		return (
			<button
				type='submit'
				disabled={disableBtn}
				className='ui primary right floated button'
				onClick={this.onFormSubmit}
			>
				{this.renderButtonContent()}
			</button>
		);
	};

	renderButtonContent = () => {
		const { isLoading } = this.props;
		if (isLoading) {
			return <span className='ui active tiny inverted inline loader'></span>;
		}
		return 'Submit';
	};

	///////////////////////

	render() {
		const { isValidEmail } = this.state;

		return (
			<Wrapper>
				<div className='ui form'>
					<div className='field flex'>
						<input
							type='email'
							placeholder='Email'
							value={this.state.email}
							onChange={e => this.setState({ email: e.target.value })}
							onBlur={this.validateEmail}
							data-isvalid={isValidEmail}
						/>
						{/* label is not rendered if the field is empty: */}
						<ValidationLabel type='email' show={!isValidEmail} />
					</div>

					<div className='field'>
						<textarea
							rows='3'
							placeholder='Messsage'
							value={this.state.message}
							onChange={e => this.setState({ message: e.target.value })}
						/>
					</div>

					{this.renderSubmitButton()}
				</div>
			</Wrapper>
		);
	}
}

export default Form;
