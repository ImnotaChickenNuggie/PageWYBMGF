import React from 'react';
import './HeartSwitch.css';

const HeartSwitch = () => {
	const handleClick = () => {
		console.log('vivo');
		document.getElementById('leyenda').style.display = 'none';
		document.getElementById('divSecreto').style.display = 'block';
		document.getElementById('seccionOculta').style.display = 'block';
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
