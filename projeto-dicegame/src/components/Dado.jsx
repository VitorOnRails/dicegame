import styled from "styled-components";

const Dado = ({ dadoAtual, rolarDado }) => {
  return (
    <DadosContainer>
      <div className="dado" onClick={rolarDado}>
        <img src={`/images/Dados/dice_${dadoAtual}.png`} alt="Dado 1" />
      </div>
      <p>Clique no Dado para rolar</p>
    </DadosContainer>
  )
}

export default Dado;

const DadosContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 48px;
  flex-direction: column;

  p {
    font-size: 24px;
  }

  .dado {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-top: 24px;

    img {
      width: 120px;
    }

    p {
      font-size: 16px;
    }
  }
`;