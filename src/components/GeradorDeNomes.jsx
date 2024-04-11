
import { useState } from "react"

// Cria uma página HTML (Utilizando React) com:
// Um título: "Gerador de Nomes"
// Um botão com o conteúdo "Gerar"
// Um parágrafo com o valor gerado. No início deve dizer "Clique em Gerar"
// Faz com que ao clicar no botão, o valor presente no parágrafo seja alterado para um novo valor aleatório. Os nomes devem ser compostos por um nome e um adjetivo.

const nomes = [
    "Teodoro",
    "Cátia",
    "Ana",
    "Anne",
    "Quitério",
    "Flipo",
    "Palmira",
    "Teofilo",
    "Horácio",
]
const apelidos = [
    "Oliveira",
    "Pereira",
    "Macieira",
    "Laranjeira",
    "Sobreiro",
    "Pinheiro",
    "Farinheira",
]
const alcunhas = [
    "Demente",
    "Dez mentes",
    "Prudente",
    "Feliz",
    "Doente",
    "Simpatic@",
]

export function GeradorDeNomes(props) {
    //Hooks (coisas começadas com "use")
    const [conteudo, setConteudo] = useState("Clique em Gerar")

    const geraNumeroAleatorio = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min
    }

    const dameAleatorio = (array) => {
        return array[geraNumeroAleatorio(0, array.length)]
    }

    //Tudo o resto
    const handleClick = () => {
        setConteudo(`${dameAleatorio(nomes)} "${dameAleatorio(alcunhas)}" ${dameAleatorio(apelidos)}`)
    }

    //Estrutura
    return (
        <>
            <button onClick={handleClick}>Gerar</button>
            <p>{conteudo}</p>
        </>
    )
}