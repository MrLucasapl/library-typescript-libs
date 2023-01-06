import styled from 'styled-components';
import { TextField } from '@mui/material';
import { styled as muistyled } from '@mui/material/styles';

export const TextFieldMui = muistyled(TextField)({
	width: '100%',
	height: '100%',
	display: 'flex',
	fontSize: '1rem',
	borderRadius: '5px',
	justifyContent: 'center',
	backgroundColor: '#FFFFFF',
	
	'& .MuiOutlinedInput-root': {
		padding: '5px',

		'& input' :{
			padding: '0px',
			paddingLeft: '0px',
		},

		'&.Mui-focused fieldset': {
			outline: '0',
			border: 'none',
			boxShadow: '0 0 0 0',
		},
		
		'& fieldset': {
			height: '90%',
			border: 'none',
		},
	}
});

export const LibraryStyles = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px;
  align-items: center;
  background: #ffffff;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: flex-start;

  .box-component {
    width: 70%;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
  }

  .box-search{
    width: 60%;
    height: 53px;
    padding: 5px;
    display: flex;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    border: 1px solid #ADB5BD;
  }
  
  #box-books {
    display: grid;
    width: 100%;
    height: 100%;
    padding: 0px 5px;
    justify-items: center;
    overflow: auto;
    grid-template-columns: repeat(5, 1fr);
  }

  #box-books::-webkit-scrollbar {
    width: 0px;
  }

  @media (max-width: 1140px) {
    #box-books {
      grid-template-columns: repeat(4, 1fr);
    }

    .box-component {
      width: 100%;
    } 
  }
  
  @media (max-width: 1030px) {
    #box-books {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 745px) {
    #box-books {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 505px) {
    #box-books {
      grid-template-columns: repeat(1, 1fr);
    }

    .box-search {
      min-width: 170px;
    } 
  }
`;