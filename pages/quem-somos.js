import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/quem-somos.module.css";
import globalStyles from "../styles/global.module.css";

const QuemSomos = () => {
  return (
    <>
      <Header />
      <main>
        <section className={`${styles.container} container-fluid`}>
          <div className="container">
            <h1 className={globalStyles.h2}>Nossa História</h1>
            <p className={`${globalStyles.text} ${styles.text}`}>
              A Litoral Saúde é uma empresa gaúcha especializada na
              comercialização de medicamentos, materiais odontológicos e
              hospitalares, de registro próprio e de terceiros. Desde o início
              de suas atividades em 2009, destaca-se por estar sempre buscando
              aperfeiçoamento no seu processo de distribuição, atento aos
              constantes comunicados normativos da Anvisa.
            </p>
            <p className={`${globalStyles.text} ${styles.text}`}>
              Focados na gestão e inovação, buscamos sempre encontrar soluções
              de qualidade e segurança para os profissionais da saúde.{" "}
            </p>
            <p className={`${globalStyles.text} ${styles.text}`}>
              Portanto, conte conosco para compartilhar o que existe de melhor
              para saúde brasileira.{" "}
            </p>
          </div>
        </section>
        <section
          className={`${styles.container} ${styles.background} container-fluid`}
        >
          <div className="container">
            <h2 className={globalStyles.h2}>Missão</h2>
            <p className={`${globalStyles.text} ${styles.text}`}>
              Levar aos profissionais e entidades de saúde, as melhores soluções
              com os menores custos e no menor tempo possível. Acreditamos que
              essas premissas ajudam a salvar vidas.
            </p>
          </div>
        </section>
        <section className={`${styles.container} container-fluid`}>
          <div className="container">
            <h2 className={globalStyles.h2}>Visão</h2>
            <p className={`${globalStyles.text} ${styles.text}`}>
              Ter um portfólio de produtos de qualidade e custo competitivo.
            </p>
          </div>
        </section>
        <section
          className={`${styles.container} ${styles.background} container-fluid`}
        >
          <div className="container">
            <h2 className={globalStyles.h2}>Valores</h2>
            <ul>
              <li className={`${styles.itemList} ${globalStyles.text}`}>
                - Respeito à vida
              </li>
              <li className={`${styles.itemList} ${globalStyles.text}`}>
                - Ética e transparência
              </li>
              <li className={`${styles.itemList} ${globalStyles.text}`}>
                - Respeito aos colaboradores
              </li>
              <li className={`${styles.itemList} ${globalStyles.text}`}>
                - Acreditar que o trabalho e a educação mudam o mundo.
              </li>
            </ul>
          </div>
        </section>
        <section className={`${styles.container} container-fluid`}>
          <div className="container">
            <h2 className={globalStyles.h2}>Nossas Certificações</h2>
            <p className={`${globalStyles.text} ${styles.text}`}>
              <p className={`${globalStyles.text} ${styles.text}`}>
                Trabalhar com o segmento da saúde, exige extremo cuidado e
                aperfeiçoamento diário. Para isso, possuímos sistema de controle
                de qualidade eficiente, onde garantimos conformidades para todas
                as certificações exigidas pelos órgãos reguladores do Brasil.
                Somos um dos únicos distribuidores no Sul do país a possuir o
                Certificado de Boas Práticas de Distribuição de Medicamentos, e
                estamos sempre buscando a melhoria nos processos normativos da
                Anvisa.
              </p>
            </p>
            <div className={styles.listContainer}>
              <ul>
                <li className={`${styles.itemList} ${globalStyles.text}`}>
                  - Afe Cosméticos
                </li>
                <li className={`${styles.itemList} ${globalStyles.text}`}>
                  - Afe Saneantes
                </li>
                <li className={`${styles.itemList} ${globalStyles.text}`}>
                  - Afe Correlatos
                </li>
                <li className={`${styles.itemList} ${globalStyles.text}`}>
                  - Afe Medicamentos
                </li>
                <li className={`${styles.itemList} ${globalStyles.text}`}>
                  - Afe Medicamentos Especiais
                </li>
              </ul>
              <ul>
                <li className={`${styles.itemList} ${globalStyles.text}`}>
                  - Alvarás
                </li>
                <li className={`${styles.itemList} ${globalStyles.text}`}>
                  - Registro Anvisa
                </li>
                <li className={`${styles.itemList} ${globalStyles.text}`}>
                  - PPCI
                </li>
                <li className={`${styles.itemList} ${globalStyles.text}`}>
                  - Radar
                </li>
                <li className={`${styles.itemList} ${globalStyles.text}`}>
                  - Boas Práticas de Distribuição de Medicamentos
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default QuemSomos;
