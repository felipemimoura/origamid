import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em Contato" />
      <img src={foto} alt="Maquina de Escrever" />
      <div>
        <h1>Entre em Contato</h1>
        <ul className={styles.dados}>
          <li>felipe@origamid.com</li>
          <li>98765-4321</li>
          <li>Rua dos Bobos, 123</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
