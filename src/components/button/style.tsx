import Button from '@mui/material/Button';
import { IButtonsProps } from '../../global';
import { styled as muistyled } from '@mui/material/styles';

export const StyledButton = muistyled(Button)((format: IButtonsProps) => ({
	display: 'flex',
	fontSize: `${format.fontSize}`,
	boxShadow: 'none',
	width: `${format.width}`,
	fontWeight: 'bold',
	height: `${format.height}`,
	border: '1px solid',
	borderRadius: '5px',
	alignContent: 'center',
	justifyContent: 'center',
	borderColor: `${format.bordercolor}`,
	backgroundColor: `${format.backgroundcolor}`,

	...(format.className && !format.disabled && {
		borderColor: '#ADB5BD',
		backgroundColor: '#F4F4F4',
	}),

	...(format.disabled && !format.className && {
		borderColor: '#ADB5BD',
		backgroundColor: '#ffc4018b',
	}),

	'&:hover': {
		backgroundColor: `${format.backgroundcolor}`,
		borderColor: `${format.bordercolor}`,
		boxShadow: 'none',
	},

	'span': {
		width: '100%',
		height: `${format.height}`,
	}

}));
