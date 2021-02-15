import React from 'react'
import Produto from './Produto'
import Titulo from './Titulo'

export default function Produtos() {

    const produtos = [
        {
            nome: 'Notebook' , propriedades: ['16gb ram', '512gb']
        },
        {
            nome: 'Smartphone' , propriedades: ['2gb ram', '128gb']
        },
    ]

    return (
        <div>  
            <Titulo texto="produtos"/>
            {produtos.map((produto) =>(
                <Produto key={produto.nome} {...produto}/>
            ))}
         
             
        </div>
    )
}
