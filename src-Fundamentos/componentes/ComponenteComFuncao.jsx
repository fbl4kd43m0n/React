import React from 'react'

export default props => {
    const aprovados = ['Patty', 'Flavio', 'Andres', 'Franciny']
    let num = Math.random()

    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {num}
            {gerarItens(aprovados)}
        </ul>
    )

}