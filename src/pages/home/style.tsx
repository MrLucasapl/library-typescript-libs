import styled from 'styled-components';

export const HomeStyle = styled.section`
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;

  ::-webkit-scrollbar {
    width: 0px;
  }

  section:hover {
    background: #ffc501;
    border: 3px solid #ffc501;
    transition: all 1s ease-out;
  }
`;
