import React, { useState } from "react";
import Produto from "./Produto";


function App() {
  const [dados , setDados] = useState(null)
  const [carregando, setCarregando] = useState(null)

  async function handleClick(event) {
    setCarregando(true)
    const response =  await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)

    const json = await response.json()
    setInterval(() =>{
      setCarregando(false)
      
    }, 1000)
    
    setDados(json)
  }


  return (
    <div>
      <button onClick={handleClick} style={{margin: '.5rem'}}>notebook</button>
      <button onClick={handleClick} style={{margin: '.5rem'}}>smartphone</button>
      <button onClick={handleClick} style={{margin: '.5rem'}}>tablet</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
}

export default App;
