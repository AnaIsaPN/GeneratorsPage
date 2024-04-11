// jogodogalo.js

// Função para verificar se o jogo terminou
export function verificarFimDoJogo(state) {
    const tabuleiro = state.tabuleiro;
  
    // Verificar se todas as casas estão preenchidas
    for (let linha = 0; linha < 3; linha++) {
      for (let coluna = 0; coluna < 3; coluna++) {
        if (tabuleiro[linha][coluna] === " ") {
          return false; // Se há uma casa vazia, o jogo não terminou
        }
      }
    }
  
    return true; // Se todas as casas estão preenchidas, o jogo terminou
  }
  
  // Função para verificar se uma casa no tabuleiro está vazia
  export function casaVazia(tabuleiro, linha, coluna) {
    return tabuleiro[linha][coluna] === " ";
  }
  
  // Função para adicionar uma jogada ao tabuleiro
  export function adicionarJogada(state, jogador, linha, coluna) {
    const novoTabuleiro = state.tabuleiro.map((row, rowIndex) =>
      row.map((cell, colIndex) =>
        rowIndex === linha && colIndex === coluna ? jogador : cell
      )
    );
  
    return {
      ...state,
      tabuleiro: novoTabuleiro,
      jogadorAtual: jogador === "X" ? "O" : "X" // Alternar jogador após cada jogada
    };
  }
  
  // Função para verificar se há um vencedor no jogo
// jogodogalo.js

// Função para verificar se há um vencedor no jogo
export function verificarVencedor(state) {
    const linhas = state.tabuleiro;
    const diagonais = [
      [linhas[0][0], linhas[1][1], linhas[2][2]],
      [linhas[0][2], linhas[1][1], linhas[2][0]]
    ];
  
    // Verificar linhas, colunas e diagonais
    const linhasECols = [...linhas, ...linhas.map((_, i) => [linhas[0][i], linhas[1][i], linhas[2][i]])];
    const todasAsLinhas = [...linhasECols, ...diagonais];
    for (let i = 0; i < todasAsLinhas.length; i++) {
      const linha = todasAsLinhas[i];
      if (linha.every(cell => cell === "X")) return i; // Retorna o índice da linha vencedora
      if (linha.every(cell => cell === "O")) return i; // Retorna o índice da linha vencedora
    }
  
    return undefined; // Não há vencedor
    
}