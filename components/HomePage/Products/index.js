import React from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import styles from "./styles.module.css";
import globalStyles from "../../../styles/global.module.css";

const Products = () => {
  return (
    <section className={styles.container}>
      <h2 className={globalStyles.h1}>Nossos produtos</h2>
      <div className={styles.cards}>
        <ProductCard
          src="/face.svg"
          alt="asdas"
          title="Produtos Odontológicos"
        />
        <ProductCard
          src="/insta.svg"
          alt="asdas"
          title="Produtos Médicos e Hospitalares "
        />
        <ProductCard src="/face.svg" alt="asdas" title="Registro Próprio" />
      </div>
      <Link href="/produtos">
        <a className={globalStyles.link}>Ver tudo</a>
      </Link>
    </section>
  );
};

export default Products;
