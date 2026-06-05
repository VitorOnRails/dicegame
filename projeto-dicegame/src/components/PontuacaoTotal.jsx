import styled from 'styled-components';

const PontuacaoTotal = ({ pontuacaoTotal }) => {
  return (
    <PontuacaoContainer>
        <h1>{pontuacaoTotal}</h1>
        <p>Pontuação Total</p>
      </PontuacaoContainer>
  )
}

export default PontuacaoTotal;

const PontuacaoContainer = styled.div`
  max-width: 300px;
  text-align: center;

  h1 {
    font-size: 100px;
    line-height: 100px;
  }

  p {
    font-size: 24px;
    font-weight: 500px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 60px;
      line-height: 60px;
    }

    p {
      font-size: 18px;
    }
  }
`;