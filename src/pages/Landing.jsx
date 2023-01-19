import React from 'react';
import useSound from 'use-sound';
import Music from '../assets/song.mp3';

const Landing = () => {
	const [play] = useSound(Music);
	const handleClick = () => {
		play();
		document.getElementById('prueba').style.display = 'none';
		console.log('vivo');
	};
	return (
		<div id='prueba'>
			<p className='font-rachelya text-7xl'>Page</p>
			<button onClick={handleClick}>Sound 🔈</button>
		</div>
	);
};

export default Landing;
