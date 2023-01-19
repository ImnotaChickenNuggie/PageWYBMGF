import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import ImgDesktop from '../assets/render-crypto.png';
import Google from '../assets/google.png';
import Metamask from '../assets/metamask.png';

const Login = () => {
	return (
		<div className='container bg-indigo-100 w-screen h-screen overflow-y-hidden'>
			{/* navbar */}
			<div className='w-full flex flex-row p-4'>
				<img
					className='w-2/12 cursor-pointer'
					src={Logo}
					alt='logotipo de la empresa'
				/>
			</div>
			{/* contenedor */}
			<div className='flex flex-row'>
				<div className='w-3/5'>
					<img
						// className='w-2/12 cursor-pointer'
						src={ImgDesktop}
						alt='Render en 3D de una computadora y crypto'
					/>
				</div>
				<div className=' w-2/5'>
					<div className='flex flex-col h-full items-center'>
						<p className='font-sans font-semibold text-4xl text-center text-neutral-800 mt-6 mb-2'>
							¡Qué gusto verte de nuevo!
						</p>
						<p className='font-sans text-neutral-800 text-center my-4'>
							Ingresa a la plataforma y comienza a invertir en
							minutos.
						</p>
						<div className='bg-indigo-300 w-3/5 flex-row mx-8 rounded-md p-6 drop-shadow-lg'>
							<p className='font-sans text-neutral-800'>
								Usuario
							</p>
							<input
								type='text'
								className='rounded-md p-2 bg-stone-100 w-full'
							/>
							<p className='font-sans text-neutral-800 mt-8'>
								Contraseña
							</p>
							<input
								type='password'
								className='rounded-md p-2 bg-stone-100 w-full'
							/>
							<div className='flex flex-col mt-8'>
								<Link
									className='mx-auto bg-indigo-600 text-white p-2 rounded-md transition duration-200 hover:ease-in-out hover:bg-indigo-800'
									to='/secret'
								>
									Iniciar Sesión
								</Link>
								<hr className='mt-4' />
								<button className='mx-auto flex flex-row bg-white text-black p-2 rounded-md transition duration-200 hover:ease-in-out hover:bg-slate-200 my-4'>
									Ingresar con{' '}
									<img
										className='w-5 ml-2'
										src={Metamask}
										alt=''
										aria-hidden='true'
									/>
								</button>
								<button className='mx-auto flex flex-row bg-white text-black p-2 rounded-md transition duration-200 hover:ease-in-out hover:bg-slate-200'>
									Ingresar con{' '}
									<img
										className='w-5 ml-2'
										src={Google}
										alt=''
										aria-hidden='true'
									/>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
