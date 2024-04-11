const { useState } = require("react")

export function TaskItem({ concluido, text }) {
    return (
        <div>{concluido ? <s>{text}</s> : text}</div>
    )
}
// export function TaskItem(props) {
//     //props.concluido
//     //props.text
//     return (
//         <div>{props.text} </div>
//     )
// }

// const pessoa = {
//     olhos: 2,
//     altura: 1241254,
//     nome: "qualquer coisa"
// }

// const { olhos, altura } = pessoa

// pessoa.olhos
// pessoa.altura
// altura
// olhos
// pessoa.nome

// const useState = ["a", "b"]
// const [state, setState] = useState