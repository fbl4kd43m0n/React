import React from 'react'

//function primeiro() {
//    return <h1>Primeiro Componente!</h1>
//}

//export default function(){
//    return <h1>Primeiro Componente!</h1>
//}

//export default () =>  // arrow function
//    <h1>Primeiro Componente (Arrow)!</h1>

let isLegal = true

export default (props) =>
    <div>
        <h1>{props.valor}</h1>
        <h2>{props.abcd}</h2>
        <h3>{1 + 1}</h3>
        <h4>{isLegal? 'Sim':'Não'}</h4>
        <p>{Math.random()}</p>
    </div>