import styled from 'styled-components';

export const Button = styled.button`
  font-size: 16px;
  min-width: 220px;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  border: none;
  color: #FFFFFF;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  cursor: pointer;
  &:hover {
    background-color: #FFFFFF;
    color: #000000;
    border: 1px solid #000000;
    transition: 0.3s background ease-in;
  }
`;


export const Contorno = styled(Button)`
  background-color: #FFFFFF;
  border: 1px solid #000000;
  color: #000000;
  &:hover {
    background-color: #000000;
    color: #FFFFFF;
    border: 1px solid transparent;
  }
`;