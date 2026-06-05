import styled from 'styled-components'

const NumberSelector = ({ erro, setErro, numeroSelecionado, setNumeroSelecionado }) => {
const arrayNumbers = [1, 2, 3, 4, 5, 6];

const numberSelectorHandler = (number) => {
    setNumeroSelecionado(number);
    setErro("");
};

    return (
    <NumberSelectorContainer>
        <p className="error">{erro}</p>
        <div className="flex">
            {arrayNumbers.map((number, i) => (<NumbersContainer isSelected={ number === numeroSelecionado } key={i} onClick={() => numberSelectorHandler(number)}>{number}</NumbersContainer>))}
        </div>
        <p>Selecione um Número</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`

    display: flex;
    align-items: end;
    flex-direction: column;

    .flex  {
        display: flex;
        gap: 24px;
    }

    p {
        font-size: 24px;
        font-weight: 700px;
    }

    .error {
        color: red;
    }

    @media (max-width: 768px) {
        align-items: center;
        width: 100%;

        .flex {
            gap: 10px;
            justify-content: center;
            flex-wrap: wrap;
        }

        p {
            font-size: 18px;
        }
    }
`;

const NumbersContainer = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid #000000;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: bold;
    background-color: ${(props) => (props.isSelected ? "#000000" : "#FFFFFF")};
    color: ${(props) => (!props.isSelected ? "#000000" : "#FFFFFF")};

    @media (max-width: 768px) {
        height: 44px;
        width: 44px;
        font-size: 18px;
    }
`;
