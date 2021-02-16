import React, { useEffect, useState } from "react";
import Produto from "./Produto";

function App() {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if(produtoLocal !== null) setProduto(produtoLocal)
  }, []);

  useEffect(() => {
    if (produto !== null) window.localStorage.setItem("produto", produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <h1>Preferencia: {produto}</h1>
      <button onClick={handleClick} style={{ marginRight: "1rem" }}>
        notebook
      </button>
      <button onClick={handleClick} style={{ marginRight: "1rem" }}>
        smartphone
      </button>
      <Produto produto={produto} />
    </div>
  );
}

export default App;
