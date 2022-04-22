import React from "react";
import Image from "next/image";
import globalStyles from "../../../styles/global.module.css";
import styles from "./styles.module.css";

const Presentation = () => {
  return (
    <section className={`${styles.container} container`}>
      <div className={styles.imgWrapper}>
        <Image
          width={420}
          height={250}
          src="/litoral.svg"
          alt="Logo da litoral saúde"
        />
        <h1 className="d-none">Somos Litoral Saúde</h1>
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
