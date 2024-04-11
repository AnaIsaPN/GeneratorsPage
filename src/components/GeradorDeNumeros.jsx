
import { useState } from "react"

// Cria uma página HTML (Utilizando React) com:
// Um título: "Gerador de Números"
// Um botão com o conteúdo "Gerar"
// Um parágrafo com o valor gerado. No início deve dizer "Clique em Gerar"
// Faz com que ao clicar no botão, o valor presente no parágrafo seja alterado para um novo valor aleatório.

export function GeradorDeNumeros(props) {
    //Hooks (coisas começadas com "use")
    const [conteudo, setConteudo] = useState("Clique em Gerar")

    const geraNumeroAleatorio = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min
    }

    //Tudo o resto
    const handleClick = () => {
        const valorAleatorio = geraNumeroAleatorio(1, 355)
        setConteudo(valorAleatorio)
    }

    //Estrutura
    return (
        <>
            <button onClick={handleClick}>Gerar</button>
            <p>{conteudo}</p>
        </>
    )
}