import React from 'react';
import useSound from 'use-sound';
import Music from '../assets/song.mp3';
import Blap from '../assets/b-lap.jpeg';
import BHeart from '../assets/b-heart.jpg';
import Pikachu from '../assets/pikachu.jpg';
import Codigo from '../components/Codigo';
import HeartSwitch from '../components/HeartSwitch';
import './Landing.css';

const Landing = () => {
	const [play] = useSound(Music);
	const handleClick = () => {
		play();
		document.getElementById('hiddeDiv').style.display = 'block';
		document.getElementById('btnMusic').style.display = 'none';
		console.log('vivo');
	};
	const showAlert = (e) => {
		e.preventDefault();
		alert('y ahora? Nunca había llegado tan lejos 😂');
	};
	return (
		<div className='container scroll-smooth overflow-x-hidden width-screen bg-orange-200'>
			<section className='flex flex-col mx-auto text-center mt-10 h-screen items-center'>
				<p className='text-center font-rachelya text-7xl md:text-9xl'>
					Hola, Jessie
				</p>
				<p className='text-center font-rachelya text-3xl mx-8 my-8'>
					Sabías que eres la primer persona en utilizar esta página?
					<p>por lo tanto, deberíamos hacer algo diferente.</p>
				</p>
				<p className='text-center font-rachelya text-3xl mt-3 mb-8 mx-8'>
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
					<p className='text-center font-rachelya text-3xl mt-3 mx-8'>
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
							btw el mío ya está activo por ti ✨
						</small>
					</p>
					<div className='flex flex-col mx-auto mt-20'>
						<HeartSwitch />
					</div>
					<div className='flex flex-col mx-auto mt-8'>
						<p
							id='leyenda'
							className='text-center text-white font-rachelya text-2xl'
						>
							Da click bajo tu propia responsabilidad, <br /> una
							vez activado no hay vuelta atrás.
						</p>
					</div>
					<div
						id='divSecreto'
						className='flex-col mx-auto mt-16 hidden'
					>
						<div className='flex flex-row gap-x-8'>
							<img
								src={BHeart}
								className='rounded-full w-36 mx-auto hover-trigger'
								alt='Bruno con mano corazón'
							/>
							<div className='p-4 font-mono text-sm rounded-md shadow-lg bg-slate-100 hover-target'>
								<p>
									Hola Jess, este es un cyberBruno (por eso te
									saludo de nuevo) jaja, creo que sabes a
									donde va esto, pero antes quería entrar en
									mi mood cursi y abrir mi corazoncito; llevo
									como 5 veces escribiendo esto y topé que no
									voy a dar con las palabras correctas porque
									las palabras solo son eso, podría poner que
									estoy muy feliz, que me gustas mucho, etc.
									Pero es lo que el 99% de las personas dice y
									que hueva entrar en esa estadística, así que
									prefiero cada día que pasemos, demostrarte
									mi cariño, comprensión y ternura (fragmento
									de un meme) con acciones y no con palabras.
								</p>
							</div>
						</div>
						<p className='text-center text-white font-rachelya text-2xl'>
							Listo, puedes hacer scroll o antes poner el cursor
							encima del Bruno.
						</p>
					</div>
				</div>
			</section>
			{/* ultima sección */}
			<section id='seccionOculta' className='h-screen bg-rose-400 hidden'>
				<div className='flex flex-row mx-auto'>
					<h1 className='neon text-8xl mx-auto pt-40'>
						¿Do you want to be
						<br />
						my girlfriend?
					</h1>
				</div>
				<div className='flex flex-row gap-x-8 mt-20'>
					<button
						onClick={showAlert}
						className='rounded-md p-4 bg-indigo-300 w-42 noBtn mx-auto transition duration-300 hover:bg-indigo-500 hover:text-white'
					>
						<span>No</span>
					</button>
					<button
						onClick={showAlert}
						className='rounded-md p-4 bg-indigo-300 w-42 mx-auto transition duration-300 hover:bg-indigo-500 hover:text-white'
					>
						Obvio que sí
					</button>
				</div>
			</section>
		</div>
	);
};

export default Landing;
