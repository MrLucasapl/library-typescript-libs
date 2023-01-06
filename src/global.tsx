import {ButtonProps} from '@mui/material/Button';

export interface IButtonsProps extends ButtonProps {
    width: string;
    height: string;
	fontSize: string;
    textcolor?: string;
    bordercolor?: string;
    backgroundcolor?: string;
	onClick?: () => void;
}

export interface IrentHistory {
	class: string;
	studentName: string;
	deliveryDate: string;
	withdrawalDate: string;
}

export interface IrentHistoryAll extends IrentHistory{
    title: string
}

export interface Ibooks {
	id: string;
	title: string;
	author: string;
	genre: string;
	status: {
		isActive: boolean;
		description: string;
	};
	image: string;
	systemEntryDate: string;
	synopsis: string;
	rentHistory: IrentHistory[];
}

type TModal = 'main' | 'lent' | 'isRent' | 'rentHistory' | 'inactive' | 'isInactive';

export type MainModalProps = {
	setModal?: React.Dispatch<
		React.SetStateAction<{
			main: boolean;
			lent: boolean;
			isRent: boolean;
			rentHistory: boolean;
			inactive: boolean;
			isInactive: boolean;
		}>
	>;
	bookId: string;
	handleClose?: ()=> void;
	handleChangeModal?: (closeModal: TModal, openModal: TModal) => void;
};