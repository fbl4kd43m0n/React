import React from 'react'
import Membro from './Membro'

export default props =>
    <div>
        <Membro nome="Patty" sobrenome={props.sobrenome} />
        <Membro nome="Franciny" sobrenome={props.sobrenome} />
        <Membro nome="Andres" sobrenome={props.sobrenome} />
        <Membro nome="Flavio" sobrenome={props.sobrenome} />
        
    </div>
