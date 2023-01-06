import { styled as muistyled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import styled from 'styled-components';

export const StyledModal = muistyled(Box)({

	'.box-closeModal': {
		display: 'flex',
		justifyContent: 'right',
	},

	'.box-content': {
		width: '100%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',

		'img': {
			width: '272px',
		},
	},

	'.box-LoanBook': {
		width: '100%',
		height: '100%',
		display: 'flex',
		alignItems: 'start',
		flexDirection: 'column',
		marginBottom: '10px',

		'h1': {
			color: '#3E4756',
			marginBottom: '10px',
		},
	
		'.box-fild-loan': {
			width: '100%',
			display: 'flex',
			padding: '10px',
			borderRadius: '5px',
			backgroundColor: '#F4F4F4',
			justifyContent: 'space-around',
			alignItems: 'baseline',
	
			'.fild': {
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-end',
				alignItems: 'center',
			},

			'.fild-inactivad':{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
			},
	
			'strong': {
				color: '#3E4756',
			},
	
			'p': {
				margin: '20px 0px',
			},
		},
	},

	'.box-info': {
		width: '100%',
		height: '400px',
		display: 'flex',
		overflow: 'auto',
		margin: '0px 20px',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
	},

	'.box-field': {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',

		'h1': {
			textAlign: 'center',
		},

		'strong': {
			width: '100%',
		},

		'#synopsis': {
			width: '100%',
			overflow: 'auto',
		},
	},

	'.box-button':{
		width: '100%',
		height: '160px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
});

export const TextFieldMui = muistyled(TextField)({
	width: '100%',
	margin: '10px 0px',
	borderRadius: '5px',
	backgroundColor: '#F1F3F5',
	
	'& .MuiOutlinedInput-root': {
		'&.Mui-focused fieldset': {
			outline: '0',
			boxShadow: '0 0 0 0',
			borderColor: '#F1F3F5',
		},
		
		'& fieldset': {
			borderColor: '#F1F3F5',
		},
	}
});

export const StyleLend = styled.section`

	.box-content {
		display: flex;
		flex-direction: column;
	};

	.box-text {
		width: 100%;
		display: flex;
		justify-content: flex-start;
	};
	
	.box-button-lend {
		width: 100%;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	form {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		margin: 20px 0px;
		align-items: center;
		justify-content: space-between;
	};

	.box-two-input{
		width: 49%;
	}
`;

export const InputDescription = muistyled(TextField)({
	width: '100%',
	height: '129px',
	margin: '10px 0px',
	borderRadius: '5px',
	backgroundColor: '#FFFFFF',
	
	'& .MuiOutlinedInput-root': {
		height: '100%',
		
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

export const StyleInactivate = styled.section`

	.box-button-inactivate {
		width: 100%;
		height: 70px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	form {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		margin: 20px 0px;
		align-items: center;
	};

`;

export const StyleRentHistory = styled.section`
	width: 100%;
    height: 100%;
    display: flex;
	flex-direction: column;

	.box-title {
		margin-bottom: 10px;
	}

    #box-table {
        overflow: hidden;
        overflow-x: scroll;
    };

    table {
        width: 100%;
        margin: 10px 0px;
        border-spacing: 0;
        border-collapse: collapse;
    };

    thead {
        width: 100%;
        height: 50px;
        font-family: 'Roboto';
        background-color: #FFC501;
    }

    .title-thead-border-left {
        border-radius: 8px 0px 0px 0px;
    }
    
    .title-thead-border-right {
        border-radius: 0px 8px 0px 0px;
    }

    th, td {
        padding: 10px 20px;
        text-align: start;
    }
    
    tr {
        width: 100%;
        height: 41px;
        border-bottom: 2px solid #CDCDCD;
    }
    
    .filter-td{
        width: 100px;
        border-bottom: 2px solid #000000;

		img{
        cursor: pointer;
        object-fit: cover;
    }
    }
    
    .line-thead{
        border-bottom: none;
    }
`;
