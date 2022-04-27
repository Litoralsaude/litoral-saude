import React from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import styles from "./styles.module.css";
import globalStyles from "../../../styles/global.module.css";

const Products = () => {
  return (
    <div className={`${styles.containerFluid} container-fluid`}>
      <section className={`${styles.container} container`}>
        <h2 className={globalStyles.h1}>Nossos produtos</h2>
        <div className={styles.cards}>
          <ProductCard
            src="/tooth.svg"
            alt="Icone de dente"
            title="Produtos Odontológicos"
          />
          <ProductCard
            src="/doctor.svg"
            alt="Icone de estetoscópio"
            title="Produtos Médicos e Hospitalares "
          />
          <ProductCard
            styled
            size={{ width: 25, height: 25 }}
            src="/house.svg"
            alt="Icone de uma casa"
            title="Registro Próprio"
          />
        </div>
        <Link href="/produtos">
          <a className={globalStyles.link}>Ver tudo</a>
        </Link>
      </section>
    </div>
  );
};

export default Products;
