import {string, object} from 'yup';

export const validationSchema = object({
	email: string().email().required(),
	password: string().min(8).required(),
});

export const initialValues = {
	email: '',
	password: '',
};