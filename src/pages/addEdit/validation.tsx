import { string, object, date,  } from 'yup';

export const validationSchema = object().shape({
	title: string().required(),
	genre: string().required(),
	author: string().required(),
	synopsis: string().required(),
	systemEntryDate: date().required(),
	image: string().required(),
});
