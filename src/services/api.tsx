import axios from 'axios';
import { Ibooks } from 'global';

const url = 'http://localhost:3000/';

const Api = axios.create({
	baseURL: url,
});

export const getUser = async (email: string, password: string) => {
	try {
		const response = await Api.get('/login',{params:{email,password}});
		return Promise.resolve(response.data);
	} catch (error) {
		return Promise.reject(error);
	}
};

export const getAllBooks = async () => {
	try {
		const response = await Api.get('/books', {});
		return Promise.resolve(response.data);
	} catch (error) {
		return Promise.reject(error);
	}
};

export const getBookId = async (id: string) => {
	try {
		const response = await Api.get('/books/' + id, {});
		return Promise.resolve(response.data);
	} catch (error) {
		return Promise.reject(error);
	}
};

export const putBookId = async (id: string, book: Ibooks ) => {
	try {
		const response = await Api.put('/books/' + id, book);
		return Promise.resolve(response.data);
	} catch (error) {
		return Promise.reject(error);
	} 
};

export const postBook = (Newbook: Ibooks) => {
	try {
		const response = Api.post('/books', Newbook);
		return Promise.resolve(response);
	} catch (error) {
		return Promise.reject(error);
	}
};