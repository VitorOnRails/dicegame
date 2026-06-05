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
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 40px;

  .conteudo {
    h1 {
      font-size: 96px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 40px 20px;

    img {
      width: 200px;
    }

    .conteudo 
    h1 {
      font-size: 48px;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 140px;
    }

    .conteudo 
    h1 {
      font-size: 36px;
    }
  }
`;
