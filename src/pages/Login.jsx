import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div onLoad={() => play()}>
			<p className='font-rachelya text-7xl'>Page</p>
			<Link to='/secret'>Login</Link>
		</div>
	);
};

export default Login;
