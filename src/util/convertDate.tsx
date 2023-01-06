import { IrentHistory } from '../global';

export const convertDate = (data: string) => {
	const newDate = new Date(data).setHours(24);
	return new Date(newDate).toLocaleDateString('pt-BR');
};

export const checkBorrowedBook = (loans: IrentHistory[])=>{
	const currentDate = new Date();
	const date = loans.filter((loan: IrentHistory) => {
		const deliveryDate = new Date(loan.deliveryDate);
		if (deliveryDate >= currentDate) return deliveryDate;
	});
	if (date.length > 0) {
		return date[0];
	}
};