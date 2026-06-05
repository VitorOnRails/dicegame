import { useState } from "react";
import Dado from "./Dado";
import NumberSelector from "./NumberSelector";
import PontuacaoTotal from "./PontuacaoTotal";
import styled from "styled-components";
import { Button, Contorno } from "../estilizacao/Button";
import Regras from "./Regras";

const Gameplay = () => {
  const [numeroSelecionado, setNumeroSelecionado] = useState(0);
  const [dadoAtual, setDadoAtual] = useState(1);
  const [pontuacaoTotal, setPontuacaoTotal] = useState(0);
  const [erro, setErro] = useState("");
  const [regras, setRegras] = useState(false);

  const gerarDadoAleatorio = (maximo, minimo) => {
    return Math.floor(Math.random() * (maximo - minimo) + minimo);
};

  const rolarDado = () => {
    if (!numeroSelecionado) {
      setErro("Você não selecionou nenhum número.");
      return;
    }
    const resultado = gerarDadoAleatorio (1, 7);
    setDadoAtual(resultado);

    if (numeroSelecionado === resultado) {
      setPontuacaoTotal((prev) => prev + resultado);
  } else {
      setPontuacaoTotal((prev) => prev - 2);
  }

  setNumeroSelecionado(undefined);
};

const reiniciar = () => {
  setPontuacaoTotal(0);
};

return (
    <MainContainer>
      <div className="topo">
      <PontuacaoTotal pontuacaoTotal={pontuacaoTotal} />
      <NumberSelector erro={erro} setErro={setErro} numeroSelecionado={numeroSelecionado} setNumeroSelecionado={setNumeroSelecionado} />
      </div>
      <Dado dadoAtual={dadoAtual} rolarDado={rolarDado} />
      <div className="btns">
        <Contorno onClick={reiniciar}>Reiniciar</Contorno>
        <Button onClick={() => setRegras((prev) => !prev)}>{regras ? "Esconder" : "Mostrar"} Regras</Button>
      </div>
      { regras && <Regras />}
    </MainContainer>
  );
};

export default Gameplay;

const MainContainer = styled.div`
  padding-top: 70px;
  .topo {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding-top: 30px;
    padding: 30px 16px 0;

    .topo {
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }
  }
`;