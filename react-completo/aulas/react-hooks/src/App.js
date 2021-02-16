import React, { useEffect, useRef, useState } from "react";


function App() {
  const [carrinho, setCarrinho] = useState(0)
  const [notificacao, setNotificacao] = useState(null)
  const timeOut = useRef()
  function handleClick(){
    setCarrinho(carrinho + 1)
    setNotificacao('item Adicionado')

   

    clearTimeout(timeOut.current)

    timeOut.current = setTimeout(() =>{
      setNotificacao(null)
    },2000)
  }


  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>

  );
}

export default App;
