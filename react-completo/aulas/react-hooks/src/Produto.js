import React, { useContext }  from "react";
import {GlobalContext} from  './GlobalContext'


export default function Produto() {
  const global = useContext(GlobalContext)
  console.log(global.dados)

  if(global.dados === null) return null
  return (
    <div>
      <div>Produto: {global.dados.map(produto  => <li key={produto.id}>{produto.nome}</li>)}</div>
      <button onClick={global.limparDados}>Limpar</button>
    </div>
  );
}
