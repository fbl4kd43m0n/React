import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './componentes/PrimeiroComponente'
import CompA, {CompB as B} from './componentes/DoisComponentes'
import MultiElementos from './componentes/MultiElementos'
import FamiliaMolesta from './componentes/FamiliaMolesta'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'
import ComponenteComFuncao from './componentes/ComponenteComFuncao'
import Pai from './componentes/Pai'
import ComponenteClasse from './componentes/ComponenteClasse'
import Contador from './componentes/Contador'
import Hook from './componentes/Hook'

const elemento = document.getElementById('root')
//const jsx = <h1>Aprendendo React!</h1>
//ReactDOM.render(jsx, elemento)

ReactDOM.render(
   <div>
       <Hook />
       <Contador numero={0} />
       <Pai />
       <ComponenteClasse valor="Eu sou um componente de classe"/>
       <ComponenteComFuncao />
       <ComponenteComFuncao />
       <PrimeiroComponente valor="Vai se fuder" abcd={Math.pow(2,8)} />
       <CompA valor="Eu sou a porra do A" />
       <B valor="Eu sou a porra do B" />

       <MultiElementos />

       <FamiliaMolesta />

       <Familia sobrenome="Molestitis" numero={666}>
           <Membro nome="Franciny" />
       </Familia>

       <Familia>
           <Membro nome="Zorro" sobrenome="Loco" />
       </Familia>

       <FamiliaMolesta sobrenome="Molestíssimus" />

   </div>
, elemento)

