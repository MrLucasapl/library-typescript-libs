import { string, object, date } from 'yup';

const validationData = (data: Date) => {
	const minDate = new Date(data);
	minDate.setDate(minDate.getDate() - 1);
	return minDate;
};

export const validationSchemaLend = object().shape({
	StudentName: string().required(),
	Class: string().required(),
	DeliveryDate: date().min(validationData(new Date())).required(),
	WithdrawalDate: date().min(validationData(new Date())).required(),
});

export const initialValuesLend = {
	StudentName: '',
	Class: '',
	DeliveryDate: '',
	WithdrawalDate: '',
};

export const validationSchemaInactivate = object().shape({
	Description: string().required(),
});

export const initialValuesInactivate = {
	Description: '',
};