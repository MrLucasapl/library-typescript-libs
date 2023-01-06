import { TextField } from '@mui/material';
import { styled as muistyled } from '@mui/material/styles';
import styled from 'styled-components';
import FundoLogin from '../../assets/fundo-login.png';

export const BackgroundImg = styled.section`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${FundoLogin});
`;

export const BackgroundFilter = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
    circle,
    rgba(252, 249, 249, 0) 0%,
    rgba(115, 115, 116, 0.685) 25%
  );

  form {
    width: 433px;
    height: 446px;
    display: flex;
    border-radius: 8px;
    align-items: center;
    flex-direction: column;
    background-color: #ffffff;
    border: 1px solid #70707040;
    justify-content: space-evenly;
  }

  #logo {
    width: 30%;
    object-fit: scale-down;
    box-sizing: border-box;
  }

  section {
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
  }

  nav {
    width: 80%;
    height: 20px;
    display: flex;
    align-items: center;
  }

  a {
    width: 80%;
    height: 100%;
    display: flex;
    color: #000000;
    font-size: 14px;
    font-weight: bold;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const TextFieldMui = muistyled(TextField)({
	width: '80%',
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