import React from 'react';
import useSound from 'use-sound';
import Music from '../assets/song.mp3';
import Blap from '../assets/b-lap.jpeg';

const Landing = () => {
	const [play] = useSound(Music);
	const handleClick = () => {
		play();
		// document.getElementById('prueba').style.display = 'none';
		console.log('vivo');
	};
	return (
		<div className='container overflow-x-hidden width-screen bg-orange-200'>
			<div className='flex flex-col mx-auto text-center mt-10'>
				<p className='text-center font-rachelya text-9xl'>
					Hola, Jessie
				</p>
				<p className='text-center font-rachelya text-3xl'>
					Sabías que eres la primer persona en utilizar esta página?
					<p>por lo tanto, deberíamos hacer algo diferente.</p>
				</p>
				<p className='text-center font-rachelya text-3xl mt-3 mb-8'>
					Así que comienza dando click en el siguiente botón. 👇🏿
				</p>
				<button
					className='rounded-md p-4 bg-indigo-300 w-42 mx-auto transition duration-300 hover:bg-indigo-500 hover:text-white'
					onClick={handleClick}
				>
					• Botón misterioso
				</button>
				<p className='text-center font-rachelya text-3xl mt-3'>
					👀 que extraño, eso no tenía que suceder, intenta hacer
					scroll ⬇️
				</p>
			</div>
		</div>
	);
};

export default Landing;
