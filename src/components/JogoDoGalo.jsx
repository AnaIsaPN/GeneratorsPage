import React from 'react';
import '../styles/JogoDoGalo.css';
import { adicionarJogada, casaVazia, verificarFimDoJogo, verificarVencedor } from '../logica/jogodogalo';

export function JogoDoGalo(props) {
  const jogoInicial = {
    tabuleiro: new Array(3).fill(new Array(3).fill(" ")),
    jogadorAtual: "X",
    vencedor: undefined
  };

  const [state, setState] = React.useState(jogoInicial);

  const handleCellClick = (linha, coluna) => {
    if (state.vencedor || !casaVazia(state.tabuleiro, linha, coluna)) return;

    const jogoAtualizado = adicionarJogada(state, state.jogadorAtual, linha, coluna);
    const vencedor = verificarVencedor(jogoAtualizado);

    setState({ ...jogoAtualizado, vencedor });
  };

  const handleRestartClick = () => {
    setState(jogoInicial);
  };

  return (
    <div>
      <Tabuleiro jogo={state} handleCellClick={handleCellClick} />
      <div>
        {state.vencedor ? (
          <span>
            Jogo Terminado! Vencedor: {state.vencedor}
          </span>
        ) : (
          <span>Jogador Atual: {state.jogadorAtual}</span>
        )}
      </div>
      <div>
        <button onClick={handleRestartClick}>Reiniciar</button>
      </div>
    </div>
  );
}

function Tabuleiro(props) {
  const { jogo, handleCellClick } = props;
  const linhaVencedora = verificarVencedor(jogo);

  return (
    <div className="JogoDoGalo">
      {jogo.tabuleiro.map((linha, i) => (
        <div key={`${i}`} className={`linha ${i === linhaVencedora ? 'linha-vencedora' : ''}`}>
          {linha.map((casa, j) => (
            <div
              key={`${i} ${j}`}
              onClick={() => handleCellClick(i, j)}
              className={`casa ${jogo.ultimaJogada && jogo.ultimaJogada.linha === i && jogo.ultimaJogada.coluna === j ? 'ultima-jogada' : ''}`}
            >
              {casa}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default JogoDoGalo;
