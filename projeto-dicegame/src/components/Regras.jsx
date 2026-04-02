import styled from 'styled-components';
const Regras = () => {
  return (
    <RegrasContainer>
        <h2>Como Jogar Rolar os Dados.</h2>
        <div className="text">
            <p>Selecione um Número.</p>
            <p>Clique no Dado.</p>
            <p>Após clicar no dado, se o número selecionado for igual ao número do dado, você receberá a mesma quantidade de pontos do dado.</p>
            <p>Se errar, serão descontados 2 pontos.</p>
        </div>
    </RegrasContainer>
  )
}

export default Regras;

const RegrasContainer = styled.div`
    background-color: #fbf1f1;
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;

    h2 {
        font-size: 24px;
    }

    .text {
        margin-top: 24px;
    }
`;