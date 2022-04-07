import React from "react";
import golbalStyles from "../../../styles/global.module.css";

const Navigation = ({ styles }) => {
  return (
    <nav className="d-none d-md-block">
      <ul className={styles.list}>
        <li className={`${golbalStyles.h3} ${styles.item}`}>
          <a>Quem somos</a>
        </li>
        <li className={`${golbalStyles.h3} ${styles.item}`}>
          <a>Produtos</a>
        </li>
        <li className={`${golbalStyles.h3} ${styles.item}`}>
          <a>Depoimentos</a>
        </li>
        <li className={`${golbalStyles.h3} ${styles.item}`}>
          <a>Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
