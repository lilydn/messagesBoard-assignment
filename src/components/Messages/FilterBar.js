import React from 'react';

class FilterBar extends React.Component {
  state = { term: '' };
  
  handleChange = (e) => {
		this.setState({ term: e.target.value });
		this.props.onInput(e.target.value.toLowerCase());
	};

	render() {
		return (
			<div>
				<div className='ui fluid left icon input'>
					<i className='search icon' />
					<input
						type='text'
						placeholder='Filter'
						value={this.state.term}
						onChange={this.handleChange}
					/>
				</div>
			</div>
		);
	}
}

export default FilterBar;
