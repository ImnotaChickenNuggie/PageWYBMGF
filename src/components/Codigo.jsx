import React from 'react';
import './Codigo.css';

const Codigo = () => {
	return (
		<>
			<div className='code-editor flex flex-col mb-12'>
				<span className='control'></span>
				<span className='control'></span>
				<span className='control'></span>
				<pre className='line-numbers language-css'>
					<code className=' language-javascript'>
						<p className='token comment mt-5' spellCheck='true'>
							/* So this is the code and maaaaybe you can hack
							this */
						</p>
						<p className='token selector'>
							{'const Landing = () => {'}
						</p>
						<p className='token property'>
							{'const [play] = useSound(Music);'}
						</p>
						<p className='token selector'>
							{'const handleClick = () => {'}
						</p>
						<p className='token punctuation'>{'play();'}</p>
						<p className='token property'>
							{
								'document.getElementById("hiddeDiv").style.display = "block";'
							}
						</p>
						<p className='token property'>
							{
								'document.getElementById("btnMusic").style.display = "none";'
							}
						</p>
						<p className='token selector'>{'};'}</p>
						<p>//create Database</p>
						<p className='token selector'>
							const database = newDatabase();
						</p>
						<p className='token property'>
							Enserio estás leyendo esto? 😨
						</p>
						<p className='token property'>
							Bueno, aprovecho pa' poner que tkm🥰
						</p>
						<p>{'<br/>'}</p>
						<p>//Llegó el momento de que sigas haciendo scroll</p>
					</code>
				</pre>
			</div>
		</>
	);
};

export default Codigo;
