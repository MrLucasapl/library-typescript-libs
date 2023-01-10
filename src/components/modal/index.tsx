import React from 'react';
import Dialog from '@mui/material/Dialog';
import { StyledModal } from './style';
import MainModal from './mods/mainModal';
import LendBookModal from './mods/lendBookModal';
import InactivateBookModal from './mods/inactivateBookModal';
import RentHistoryBookModal from './mods/rentHistoryBookModal';

const style = {
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	padding: '20px',
	width: '95%',
	height: 'auto',
	maxWidth: '816px',
	bgcolor: '#FFFFFF',
	border: '1px solid #707070',
	boxSizing: 'border-box',
	boxShadow: 24,
};

const Modal = () => {
	const standardModal = {
		main: true,
		lent: false,
		rentHistory: false,
		inactive: false,
	};
	const [modal, setModal] = React.useState(standardModal);
	const [open, setOpen] = React.useState(false);
	const [bookId, setBookId] = React.useState('');

	const handleChangeModal = (
		closeModal: keyof typeof modal,
		openModal: keyof typeof modal
	) => {
		setModal((modal) => ({ ...modal, [closeModal]: false, [openModal]: true }));
	};

	const handleClickModal = (bookId: string) => {
		setBookId(bookId);
		handleOpen();
	};

	const handleOpen: () => void = () => setOpen(true);
	const handleClose: () => void = () => {setOpen(false); setModal(standardModal);};

	const showModal = ()=>{
		return (
			<Dialog 
				open={open}
				onClose={handleClose}
			>
				<StyledModal sx={style}>
					<>
						{modal.main && (
							<MainModal
								bookId={bookId}
								handleClose={handleClose}
								handleChangeModal={handleChangeModal}
							/>
						)}
						{modal.lent && (
							<LendBookModal
								bookId={bookId}
								handleChangeModal={handleChangeModal}
							/>
						)}
						{modal.inactive && (
							<InactivateBookModal
								bookId={bookId}
								handleChangeModal={handleChangeModal}
							/>
						)}
						{modal.rentHistory && (
							<RentHistoryBookModal
								bookId={bookId}
								handleChangeModal={handleChangeModal}
							/>
						)}
					</>
				</StyledModal>
			</Dialog>
		);
	};

	return {
		handleOpen,
		handleClose,
		showModal,
		handleClickModal,
	};
};

export default Modal;