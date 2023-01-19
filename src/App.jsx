import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import * as page from './pages/index';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<page.Login />} />
				<Route path='/secret' element={<page.Landing />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
