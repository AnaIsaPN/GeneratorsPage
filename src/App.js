import React from 'react';
import './App.css';
import JogoDoGalo from './components/JogoDoGalo';
import { GeradorDeNumeros } from './components/GeradorDeNumeros';
import { GeradorDeNomes } from './components/GeradorDeNomes';

function App() {
  return (
    <div className="App">
      {/* Componente do Jogo do Galo */}
      <div className="Game">
        <h2 className="Game-title">Jogo do Galo</h2>
        <JogoDoGalo />
      </div>

      {/* Componente do Gerador de Números */}
      <div className="Game">
        <h2 className="Game-title">Gerador de Números</h2>
        <GeradorDeNumeros />
      </div>

      {/* Componente do Gerador de Nomes */}
      <div className="Game">
        <h2 className="Game-title">Gerador de Nomes</h2>
        <GeradorDeNomes />
      </div>
    </div>
  );
}

export default App;
