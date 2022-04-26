import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import globalStyles from "../../../../styles/global.module.css";

const ProductCard = ({ src, alt, text, title }) => {
  return (
    <section className={styles.container}>
      <div>
        <Image width={40} height={40} src={src} alt={alt} />
      </div>
      <h3 className={`${globalStyles.h3} ${styles.title}`}>{title}</h3>
    </section>
  );
};

export default ProductCard;
