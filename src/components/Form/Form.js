import React from 'react';
import styled from 'styled-components';
import ValidationLabel from './ValidationLabel';
import './Form.css';

const Wrapper = styled.div`
	padding: 20px;
`;

class Form extends React.Component {
	state = { email: '', message: '', isValidEmail: true };

	onFormSubmit = e => {
		// e.preventDefault();
		const { email, message, isValidEmail } = this.state;
		if (isValidEmail && email !== '') {
			this.props.onSubmit(email, message);
		}
	};

	validateEmail = () => {
		const { email } = this.state;
		// eslint-disable-next-line
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		re.test(email.toLowerCase()) || email === ''
			? this.setState({ isValidEmail: true })
			: this.setState({ isValidEmail: false });
	};

  ////////////////////
	renderSubmitButton = () => {
		const { isValidEmail } = this.state;
		if (isValidEmail) {
			return (
				<button type='submit' className='ui primary right floated button' onClick={this.onFormSubmit}>
						{this.renderButtonContent()}
				</button>
			);
    }
    else {
      return (
        <button type='submit' disabled={true} className='ui disabled primary right floated button' onClick={this.onFormSubmit}>
					{this.renderButtonContent()}
				</button>
      );
    }
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
