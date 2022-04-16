import React from "react";
import Image from "next/image";
import globalStyles from "../../../styles/global.module.css";
import styles from "./styles.module.css";

const Presentation = () => {
  return (
    <section className={`${styles.container} container`}>
      <div>
        <p className={globalStyles.h3}>Osório -RS</p>
        <h1 className={`${globalStyles.h12} ${styles.h1}`}>
          Somos Litoral Saúde
        </h1>
        <p className={globalStyles.h4}>
          Fornecedor de equipamentos médicos e odontológicos
        </p>
      </div>
      <div className="d-none d-lg-block d-xl-block">
        <Image
          width={417}
          height={415}
          src="/home-img.png"
          alt="Imagem de ícones representando profissionais da saúde"
        />
      </div>
    </section>
  );
};

export default Presentation;
