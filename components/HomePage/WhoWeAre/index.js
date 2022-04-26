import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import globalStyles from "../../../styles/global.module.css";

const WhoWeAre = () => {
  return (
    <section className={`${styles.container} container`}>
      <div className="leftTransition">
        <Image
          width={566}
          height={376}
          src="/doctor.jpeg"
          alt="Cidade de Osório"
        />
      </div>
      <div className={`${styles.wrapper} rightTransition`}>
        <header>
          <p className={styles.resume}>Resumo</p>
          <h2 className={`${globalStyles.h1} ${styles.h2}`}>Quem somos</h2>
        </header>
        <p className={`${globalStyles.text} ${styles.text}`}>
          A Litoral Saúde é uma empresa gaúcha especializada na comercialização
          de medicamentos, materiais odontológicos e hospitalares, de registro
          próprio e de terceiros. Desde o início de suas atividades em 2009,
          destaca-se por estar sempre buscando aperfeiçoamento no seu processo
          de distribuição, atento aos constantes comunicados normativos da
          Anvisa
        </p>
        <div className={styles.linkWrapper}>
          <Link href="/quem-somos">
            <a className={globalStyles.link}>Ver Mais</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
