import React from 'react';

const FilterBar = props => {
	const handleChange = e => {
		props.onInput(e.target.value.toLowerCase());
	};

	return (
		<div>
			<div className='ui fluid left icon input'>
				<i className='search icon' />
				<input
					type='text'
					placeholder='Filter'
					value={props.term}
					onChange={handleChange}
				/>
			</div>
		</div>
	);
};

export default FilterBar;
