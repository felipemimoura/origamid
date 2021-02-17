import React from 'react'
import styles from './Produto.module.css'

export default function Produto() {
    return (
        <div>
            <h1 className={styles.titulo}>Notebook</h1>
            <p className={styles.preco}>R$ 2000</p>
            <button>Comprar</button>
        </div>
    )
}
