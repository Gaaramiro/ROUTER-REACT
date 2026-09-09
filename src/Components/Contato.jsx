import React from 'react';
import foto from '../img/contato.jpg';
import styles from '../Components/Contato.module.css';
import Head from './Head';

function Contato() {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Contato" description="Entre em contato" />
      <img src={foto} alt="Maquina de escrever" />

      <div>
        <h2>Entre em contato.</h2>
        <ul className={styles.dados}>
          <li>email@email.com</li>
          <li>99999-9999</li>
          <li>Rua Ali Perto,999</li>
        </ul>
      </div>
    </section>
  );
}

export default Contato;
