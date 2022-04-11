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
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Image
            className={styles.img}
            width={121}
            height={62}
            src="/logo.svg"
            alt="Logo da litoral saúde"
          />
          <address className={styles.infoContainer}>
            <p className={styles.text}>
              R. Garibaldi, 366 - Centro, Osório - RS, CEP: 95520-000
            </p>
            <div>
              <a
                className={styles.text}
                href="mailto:atendimento@litoralsaude.com.br"
              >
                atendimento@litoralsaude.com.br
              </a>
              <a className={styles.text} href="tel:+555136010063">
                +55 (51) 3601-0063
              </a>
            </div>
          </address>
          <button className={styles.button} onClick={scrollToTop}>
            <Image
              className={styles.icon}
              width={28}
              height={28}
              src="/arrowUp.svg"
              alt="Voltar para o topo dá página"
            />
          </button>
        </div>
      </div>
      <p className={`${styles.cr} container-fluid`}>
        Litoral Saúde 2022 Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
