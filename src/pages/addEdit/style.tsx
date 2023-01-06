import styled from 'styled-components';
import ImgAdd from '../../assets/add-amarelo.png';
import { TextField } from '@mui/material';
import { styled as muistyled } from '@mui/material/styles';
import { FormControl } from '@mui/material';

export const AddEditStyle = styled.section`
    width: 100%;
    height: 100%;
	padding: 10px;
    display: flex;
    flex-wrap: wrap;
    background: #ffffff;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;

    ::-webkit-scrollbar {
        width: 0px;
    }

    #Box-Form{
        max-width: 1060px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        justify-content: center;
    };

	form{
        width: 100%;
        display: grid;
        gap: 24px;
        justify-items: center;
        box-sizing: border-box;

        grid-template-areas:
		"file title author"
		"file synopsis genre"
		"file synopsis systemEntryDate"
		"nada nada buttons";
    };
    
    #Box-Buttons{
        grid-area: buttons;
        width: 100%;
        height: 53px;
        display: flex;
        margin: 20px 0px;
        box-sizing: border-box;
        flex-direction: row-reverse;
        justify-content: space-between;
    };

	img {
		grid-area: file;
		width: 172px;
		height: 226px;
		cursor: pointer;
	}

	@media (max-width: 768px) {

		form{
            gap: 5px;
            width: 100%;
            height: 100%;
            grid-template-areas:
            "file"
            "title" 
            "author"
            "genre"
            "systemEntryDate"
            "synopsis" 
            "buttons"
            ;
        };
	}
`;

export const InputFileStyled = muistyled(TextField)({
	gridArea: 'file',
	width: '172px',
	height: '100%',
	padding: '0px',
	display: 'flex',
	color: '#FFC501',
	alignItems: 'center',
	flexDirection: 'column',
	border: 'none',

	'input': {
		width: '100%',
		height: '100%',
		padding: '0px',
		cursor: 'pointer',
	},

	'input::before': {
		content: `url(${ImgAdd}) ' Capa'`,
		width: '100%',
		height: '100%',
		display: 'flex',
		fontSize: '20px',
		overflow: 'hidden',
		color: '#FFC501',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
	
	'& .MuiOutlinedInput-root': {
		width: '100%',
		height: '100%',
		overflow: 'hidden',
        
		'&.Mui-focused fieldset': {
			outline: '0',
			boxShadow: '0 0 0 0',
			borderColor: '#F1F3F5',
		},

		'&:hover fieldset': {
			borderColor: '#FFC501',
		},
		
		'& fieldset': {
			padding: '0px',
			border: '3px dashed #FFC501',
		},
	},

	'@media (max-width: 768px)': {
		height: '200px',
	}
});

export const TextFieldMui = muistyled(TextField)({
	width: '100%',
	height: '100%',
	display: 'flex',
	borderRadius: '5px',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#FFFFFF',
	
	'& .MuiOutlinedInput-root': {
		width: '100%',
		height: '100%',
		display: 'grid',

		'input':{
			cursor: 'pointer',
		},
		
		'& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{
			width: '90%',
		},
	
		'&.Mui-focused fieldset': {
			outline: '0',
			boxShadow: '0 0 0 0',
			borderColor: '#133052',
		},
		
		'& fieldset': {
			borderColor: '#133052',
		},
	}
});

export const FormControlMui = muistyled(FormControl)({
	width: '100%',
	height: '100%',
	display: 'flex',
	borderRadius: '5px',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#FFFFFF',
	
	'& .MuiOutlinedInput-root': {
		width: '100%',
		height: '100%',
		display: 'grid',
		'&.Mui-focused fieldset': {
			outline: '0',
			boxShadow: '0 0 0 0',
			borderColor: '#133052',
		},
		
		'& fieldset': {
			borderColor: '#133052',
		},
	},
});