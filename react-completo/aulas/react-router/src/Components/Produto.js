import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Head from "./Head";
import styles from "./Produto.module.css";

const Produto = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData(url) {
    try {
      setCarregando(true);
      const response = await fetch(url);
      const json = await response.json();
      setProduto(json);
    } catch (erro) {
      setError("Um erro ocorreu");
    } finally {
      setCarregando(false);
    }
  }

  React.useEffect(() => {
    fetchData(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (carregando) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <section className={styles.produto + " animeLeft"}>
      <Head
        title={`Ranek ${produto.nome}`}
        description={`Ranek | Esse é um produto: ${produto.nome}`}
      />
      <div>
        {produto.fotos.map((foto) => (
          <img key={foto.src} src={foto.src} alt={foto.titulo} />
        ))}
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco} </span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
