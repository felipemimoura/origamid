import React, { useEffect, useState } from "react";

export default function Produto({ produto }) {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    if (produto !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
  }, [produto]);

  if (dados === null) return null;
  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.preco}</p>
    </div>
  );
}
