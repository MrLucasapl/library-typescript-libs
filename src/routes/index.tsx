import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from '../pages/login';
import Home from '../pages/home';
import Library from '../pages/Library';
import AddEdit from '../pages/addEdit';
import RentHistoryBook from '../pages/loan';

const Dors = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/home' element={<Layout />}>
					<Route path="/home" element={<Home />} />
					<Route path="/home/addbook/*" element={
						<Routes>
							<Route path=":id" element={<AddEdit />} />
							<Route path="/" element={<AddEdit />} />
						</Routes>
					} />
					<Route path="/home/biblioteca" element={<Library />} />
					<Route path="/home/historico" element={<RentHistoryBook />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Dors;
