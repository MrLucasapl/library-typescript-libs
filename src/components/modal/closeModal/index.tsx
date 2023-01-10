import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const CloseModal: React.FC<{ onClick: () => void }> = ({ onClick }) => {
	return (
		<div className='box-closeModal'>
			<CloseIcon className='icon-close' onClick={onClick}/>
		</div>
	);
};

export default CloseModal;