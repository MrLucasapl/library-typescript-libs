import styled from 'styled-components';

export const CardsStyle = styled.section`
  margin: 1%;
  width: 250px;
  display: flex;
  background: #f4f4f4;
  flex-direction: column;
  border: 3px solid #f4f4f4;

  span {
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    width: 100%;
    height: 74px;
    display: flex;
    background: #ffffff;
    align-items: center;
    justify-content: center;
  }

  p {
    color: #343a40;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
  }
`;
