import React from 'react';

const ValidationLabel = ({ type, show }) => {

	// if(show) {
    return (
      <div data-shown={show} className='ui left pointing orange basic label'>
        Please enter a valid {type}
      </div>
    );
  // }
  // return <div></div>;
};


export default ValidationLabel;
