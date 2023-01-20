import React from 'react';
import useSound from 'use-sound';
import Music from '../assets/song.mp3';
import Blap from '../assets/b-lap.jpeg';
import Pikachu from '../assets/pikachu.jpg';
import Codigo from '../components/Codigo';
import HeartSwitch from '../components/HeartSwitch';

const Landing = () => {
	const [play] = useSound(Music);
	const handleClick = () => {
		play();
		document.getElementById('hiddeDiv').style.display = 'block';
		document.getElementById('btnMusic').style.display = 'none';
		console.log('vivo');
	};
	return (
		<div className='container scroll-smooth overflow-x-hidden width-screen bg-orange-200'>
			<section className='flex flex-col mx-auto text-center mt-10 h-screen items-center'>
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
					id='btnMusic'
					className='rounded-md p-4 bg-indigo-300 w-42 mx-auto transition duration-300 hover:bg-indigo-500 hover:text-white'
					onClick={handleClick}
				>
					• Botón misterioso
				</button>
				<div id='hiddeDiv' className='hidden'>
					<p className='text-center font-rachelya text-3xl mt-3'>
						👀 que extraño, eso no tenía que suceder, intenta hacer
						scroll ⬇️
					</p>
					<img
						className='w-1/3 rounded-lg mx-auto mt-4'
						src={Pikachu}
						alt='pikachu sorprendido'
					/>
				</div>
			</section>
			{/* seccion 2 */}
			<section className='bg-stone-800 h-screen'>
				<div className='flex flex-col'>
					<div className='flex flex-row mt-20 mx-10'>
						<img
							src={Blap}
							className='rounded-full w-36'
							alt='Bruno programador'
						/>
						<p className='text-right text-white font-rachelya text-3xl mt-3'>
							Haz hecho el scroll suficiente y ahora es momento de
							comentarte que has sido timada, embarajiñada, porque
							esta no es una página común y aburrida, está
							diseñada con un fin mayor, que aún no será revelado,
							aunque te dejo una ventanita del código para que lo
							revises y adivines que es 😂
						</p>
					</div>
					<Codigo />
				</div>
			</section>
			{/* seccion 3 */}
			<section className='h-screen flex bg-indigo-400'>
				<div className='flex flex-col mx-10 mt-20'>
					<p className='text-left text-white font-rachelya text-3xl mt-3'>
						Well well well... parece que has hecho mucho scroll,
						espero te estés divirtiendo tánto como yo armando y
						programando todo esto 🤓 en fin, por cuestiones de
						seguridad, está oculta la última sección, para poder
						acceder a ella debes activar el corazoncito (El que
						aparece abajo){' '}
						<small className='text-[10px]'>
							btw el mío ya está ✨
						</small>
					</p>
					<div className='flex flex-col mx-auto mt-20'>
						<HeartSwitch />
					</div>
					<div className='flex flex-col mx-auto mt-8'>
						<p className='text-center text-white font-rachelya text-2xl'>
							Da click bajo tu propia responsabilidad, <br /> una
							vez activado no hay vuelta atrás.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Landing;
