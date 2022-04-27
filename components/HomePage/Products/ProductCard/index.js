import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import globalStyles from "../../../../styles/global.module.css";

const ProductCard = ({ src, alt, text, title, styled, size = {} }) => {
  return (
    <section className={styles.container}>
      <div className={styled && styles.circle}>
        <Image
          width={size.width || 40}
          height={size.height || 40}
          src={src}
          alt={alt}
        />
      </div>
      <h3 className={`${globalStyles.h3} ${styles.title}`}>{title}</h3>
    </section>
  );
};

export default ProductCard;
