import styled from 'styled-components';
import { Button } from '../estilizacao/Button';

const Menu = ({ toggle }) => {
  return (
  <ContainerMenu>
    <div>
      <img src="/images/dados_menu.png" />
    </div>
    <div className="conteudo">
      <h1>Rolar os Dados</h1>
      <Button onClick={toggle}>Jogar Agora</Button>
    </div>
  </ContainerMenu>
  ); 
};

export default Menu;

const ContainerMenu = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;


  .conteudo {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
