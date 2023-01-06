import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Slide, { SlideProps } from '@mui/material/Slide';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref,
) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionLeft(props: TransitionProps) {
	return <Slide {...props} direction="right" />;
}
interface IAlert{
	open: boolean;
	state: boolean; 
	message: string; 
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AlertCustomized = ({open, state, setOpen, message}:IAlert) => {
	return (
		<Snackbar onClose={() => setOpen(false)} 
			open={open} autoHideDuration={3000} TransitionComponent={TransitionLeft}>
			<Alert severity={(!state)? 'success':'error'} sx={{ width: '100%' }}>
				{message}
			</Alert>
		</Snackbar>
	);
};