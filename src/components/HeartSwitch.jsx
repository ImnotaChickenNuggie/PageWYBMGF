import React from 'react';
import './HeartSwitch.css';

const HeartSwitch = () => {
	const handleClick = () => {
		console.log('vivo');
		// document.getElementById('txtp1').style.display = 'none';
		document.getElementById('switchLove').setAttribute('disabled', true);
	};
	return (
		<>
			<div className='love'>
				<input onClick={handleClick} id='switchLove' type='checkbox' />
				<label className='love-heart' for='switchLove'>
					<i className='left'></i>
					<i className='right'></i>
					<i className='bottom'></i>
					<div className='round'></div>
				</label>
			</div>
		</>
	);
};

export default HeartSwitch;
