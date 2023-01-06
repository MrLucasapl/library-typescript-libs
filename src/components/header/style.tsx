import styled from 'styled-components';

interface Props {
  display?: string
}

export const HeaderStyle = styled.section`
  width: 100%;
  height: 96px;
  display: flex;
  padding: 0px 20px;
  align-items: center;
  flex-direction: row;
  box-sizing: border-box;
  background-color: #ffffff;
  justify-content: space-between;

  nav {
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  #menu {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #options-menu {
    width: 150px;
    height: 57px;
    display: ${({display}: Props) => `${display}`};
    margin-top: 10rem;
    position: absolute;
  }

  p {
    width: 100%;
    color: #495057;
    font-size: 1rem;
    padding: 0px 5px;
    text-align: center;
  }

  li {
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 5px;
    align-items: center;
    background-color: #f4f4f4;
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    color: #2a2a2a;
    padding: 0px 10px;
    font-size: 1.1rem;
    font-family: "Poppins";
    align-items: center;
  }
`;
