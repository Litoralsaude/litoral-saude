import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Litoral Saúde 2022 Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
