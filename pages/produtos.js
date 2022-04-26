import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/produtos.module.css";
import quemSomosStyles from "../styles/quem-somos.module.css";
import globalStyles from "../styles/global.module.css";
import ScrollAnimation from "react-animate-on-scroll";

const Produtos = () => {
  return (
    <>
      <Header />
      <main className="container-fluid">
        <section className="container opacityToLeftTransition">
          <h1 className={`${globalStyles.text} ${styles.subtitle}`}>
            Nossos produtos
          </h1>
          <p className={globalStyles.h2}>Médicos</p>
          <ul>
            <li className={quemSomosStyles.itemList}>
              - Produtos médicos e hospitalares
            </li>
            <li className={quemSomosStyles.itemList}>
              - Produtos odontológicos
            </li>
            <li className={quemSomosStyles.itemList}>- Registro Próprio</li>
          </ul>
        </section>
        <section className="container opacityToLeftTransition">
          <h2 className={`${globalStyles.h2} ${styles.h2}`}>
            CATETER IV COM DISPOSITIVO DE SEGURANÇA MEDIPRIME SAFE{" "}
          </h2>
          <p className={`${globalStyles.text} ${styles.text}`}>
            É um dispositivo indicado para infusões intravenosas, estéril, de
            uso único, radiopaco, em poliuretano, com filtro hidrofóbico e
            dispositivo de segurança que recobre o bisel da agulha, protegendo o
            profissional da área da saúde conforme a NR32.
          </p>
          <p className={`${globalStyles.text} ${styles.text}`}>
            Disponível nos tamanhos: 14G (laranja), 16G (cinza), 18G (verde),
            20G (rosa), 22G (azul), 24G (amarelo) e 26G (violeta)
          </p>
          <p className={`${globalStyles.text} ${styles.text}`}>
            Registro Anvisa: 80679519001
          </p>
          <p className={`${globalStyles.text} ${styles.text}`}>
            Responsável Técnico: Lucas Salazar Trevisan – CRF/RS: 8710
          </p>
          <div className={styles.flexContainer}>
            <div className={styles.img}>
              <Image
                width={269}
                height={192}
                src="/CATETERSEGURANÇA.jpg"
                alt="Cateter com dispositivo de segurança"
              />
            </div>
            <section className={styles.productInfo}>
              <h3 className={`${globalStyles.h3} ${styles.h3}`}>
                CATETER IV COM DISPOSITIVO DE SEGURANÇA - MEDIPRIME SAFE{" "}
              </h3>
              <p className={`${globalStyles.text} ${styles.package}`}>
                Embalagem com 1 unidade.
              </p>
              <p
                className={`${globalStyles.text} ${styles.item} ${styles.tag}`}
              >
                MEDIPRIME
              </p>
            </section>
          </div>
        </section>
        <ScrollAnimation animateIn="fadeIn" animateOnce duration={2}>
          <section className="container">
            <h2 className={`${globalStyles.h2} ${styles.h2}`}>
              CATETER IV MEDIPRIME
            </h2>
            <p className={`${globalStyles.text} ${styles.text}`}>
              É um dispositivo indicado para infusões intravenosas, estéril,
              atóxico, apirogênico, de uso único, radiopaco, em FEP (Etileno
              propileno fluorado).
            </p>
            <p className={`${globalStyles.text} ${styles.text}`}>
              Disponível nos tamanhos: 14G (laranja), 16G (cinza), 18G (verde),
              20G (rosa), 22G (azul), 24G (amarelo) e 26G (violeta)
            </p>
            <p className={`${globalStyles.text} ${styles.text}`}>
              Registro Anvisa: 80679519002
            </p>
            <p className={`${globalStyles.text} ${styles.text}`}>
              Responsável Técnico: Lucas Salazar Trevisan – CRF/RS: 8710
            </p>
            <div className={styles.flexContainer}>
              <div className={styles.img}>
                <Image
                  width={269}
                  height={192}
                  src="/CATETERSIMPLES.jpg"
                  alt="Cateter mediprime"
                />
              </div>
              <section className={styles.productInfo}>
                <h3 className={`${globalStyles.h3} ${styles.h3}`}>
                  CATETER IV MEDIPRIME
                </h3>
                <p className={`${globalStyles.text} ${styles.package}`}>
                  Embalagem com 1 unidade.
                </p>
                <p
                  className={`${globalStyles.text} ${styles.item} ${styles.tag}`}
                >
                  MEDIPRIME
                </p>
              </section>
            </div>
          </section>
        </ScrollAnimation>
      </main>
      <Footer />
    </>
  );
};

export default Produtos;
